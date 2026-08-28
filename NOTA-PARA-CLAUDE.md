# 📩 Nota para Claude (leer desde la otra PC)

**Fecha:** 2026-08-28 · **Autor:** Claude (sesión en la PC principal) junto con Alex.

Alex te pedirá organizar los proyectos locales de esta PC y subirlos a este repositorio. Esta nota te da el contexto para hacerlo bien y sin romper el orden que ya establecimos.

## Contexto del repositorio

- Este repo (`AlexMielno/Visual-Studio-Code`) tiene **una sola rama: `main`**. Así debe quedarse.
- El 2026-08-28 se hizo una limpieza total: se eliminaron 4 ramas que se usaban como "carpetas de proyectos" y se consolidó todo en la carpeta **`Proyectos de Aprendizaje/`**.
- Regla acordada con Alex: **proyectos = carpetas dentro de `Proyectos de Aprendizaje/`; las ramas solo para experimentos temporales que se fusionan y se borran.**
- Estructura actual: `Proyectos de Aprendizaje/{Aprendizaje, Listas Dinamicas, P1}`.
- El `.gitignore` de la raíz ya excluye `node_modules/`, credenciales y datos financieros. Respétalo y no subas nada de eso.

## Qué hacer en la otra PC

0. **Instalar el "guardián de privacidad" en esa máquina.** Contexto: la cuenta de Claude la comparten varias personas en distintos equipos, y Alex quiere que sus chats vivan SOLO en el equipo donde se crean (sin Remote Control ni sincronización a claude.ai). En la PC principal esto ya quedó instalado el 2026-08-28. Replícalo así, todo a nivel de USUARIO (`~/.claude/`), nunca dentro de un repositorio:

   a. Crea el archivo `~/.claude/guardian-privacidad.js` (en Windows: `C:\Users\<usuario>\.claude\guardian-privacidad.js`) con exactamente este contenido:

   ```js
   // Guardián de privacidad — hook de SessionStart de Claude Code.
   // Verifica que los chats no se compartan a la nube (cuenta usada por varias personas):
   // exige disableRemoteControl:true y autoUploadSessions:false en ~/.claude/settings.json.
   // Si faltan, los restaura y avisa. Si el JSON está roto, avisa sin tocar el archivo.
   // Uso: node guardian-privacidad.js [ruta-settings-opcional-para-pruebas]
   const fs = require("fs");
   const path = require("path");
   const os = require("os");

   const file = process.argv[2] || path.join(os.homedir(), ".claude", "settings.json");

   function avisar(mensaje) {
     console.log(JSON.stringify({ systemMessage: "🔒 Guardián de privacidad: " + mensaje }));
   }

   let raw;
   try {
     raw = fs.readFileSync(file, "utf8");
   } catch (e) {
     raw = undefined; // no existe: se creará con las protecciones mínimas
   }

   let ajustes = {};
   if (raw !== undefined) {
     try {
       ajustes = JSON.parse(raw);
     } catch (e) {
       avisar("settings.json tiene JSON inválido; no se pudo verificar ni corregir. Revísalo manualmente.");
       process.exit(0);
     }
   }

   const restaurados = [];
   if (ajustes.disableRemoteControl !== true) {
     ajustes.disableRemoteControl = true;
     restaurados.push("disableRemoteControl=true");
   }
   if (ajustes.autoUploadSessions !== false) {
     ajustes.autoUploadSessions = false;
     restaurados.push("autoUploadSessions=false");
   }

   if (restaurados.length > 0) {
     fs.writeFileSync(file, JSON.stringify(ajustes, null, 2));
     avisar(
       "el equipo estaba compartiendo chats a la nube. Se restauró: " +
         restaurados.join(", ") +
         ". Los chats vuelven a ser solo locales (reinicia la sesión para aplicar del todo)."
     );
   }
   // Si todo está bien, no imprime nada: silencio = protegido.
   ```

   b. En `~/.claude/settings.json`, fusiona (sin borrar nada existente) estas claves de nivel superior, ajustando la ruta del script a la de ese equipo:

   ```json
   {
     "disableRemoteControl": true,
     "autoUploadSessions": false,
     "hooks": {
       "SessionStart": [
         {
           "hooks": [
             {
               "type": "command",
               "command": "node \"C:/Users/<usuario>/.claude/guardian-privacidad.js\"",
               "timeout": 15,
               "statusMessage": "Verificando privacidad de la sesión"
             }
           ]
         }
       ]
     }
   }
   ```

   c. Prueba el script contra una copia desprotegida (`echo '{"autoUploadSessions":true}' > prueba.json` y ejecútalo pasándole esa ruta: debe corregirla y avisar) y contra el settings real (debe guardar silencio). Valida el JSON final con node.

   d. **No propagar:** este mecanismo es solo para los dos equipos de Alex. No lo copies a `.claude/` de ningún repositorio ni lo incluyas en commits (esta nota es la única excepción y se borra al final).
1. Si el repo no está clonado: `git clone https://github.com/AlexMielno/Visual-Studio-Code.git`. Si ya existe una copia local vieja, haz `git fetch --prune` y `git switch main` — las ramas viejas (Aprendizaje, flujo-caja, Interfases-de-Prueva, Proyectos) ya no existen; si quedaron locales, bórralas.
2. Pide a Alex que te muestre dónde están sus proyectos locales (menciona una **calculadora sin terminar**, y puede haber más).
3. Revisa cada proyecto antes de moverlo: qué es, si tiene archivos basura (node_modules, temporales, copias duplicadas) y si ya existe una versión en el repo — si hay duplicados, conserva la versión más reciente y consúltale a Alex en caso de duda.
4. Copia cada proyecto como una carpeta con nombre claro dentro de `Proyectos de Aprendizaje/` (por ejemplo: `Proyectos de Aprendizaje/Calculadora/`).
5. Haz commits con mensajes descriptivos en español (nada de "v1", "v2" — Alex ya conoce esta regla) y `git push` a `main`.
6. Cuando termines, **borra esta nota** (`NOTA-PARA-CLAUDE.md`) con un commit final, para que no quede basura en el repo.

## Sobre Alex (para que lo trates igual que aquí)

Alex está aprendiendo HTML/CSS/JS y pidió trato "estilo profe": explícale el porqué de cada paso, señala errores como oportunidades de aprendizaje y proponle retos. No le resuelvas todo sin explicar.

## Pendientes conocidos por si Alex pregunta

- En la PC principal quedó una carpeta vieja `P1/` en la raíz del repo (sin tracking, bloqueada por una terminal) pendiente de borrar manualmente. No existe en GitHub; solo es basura local de aquella PC.
- El proyecto activo de Alex es `Proyectos de Aprendizaje/P1` (lista de pendientes): está aprendiendo `localStorage`, paneles con `select`/`input` y el patrón datos→render.
