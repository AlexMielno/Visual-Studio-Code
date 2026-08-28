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

0. **Desactivar Remote Control en esa máquina** (Alex quiere que sus chats vivan solo en el equipo donde se crean, sin sincronizarse a la nube). Agrega `"disableRemoteControl": true` al nivel superior del archivo global `~/.claude/settings.json` (en Windows: `C:\Users\<usuario>\.claude\settings.json`), fusionando con el contenido existente sin borrar nada, y valida que el JSON quede correcto. En la PC principal ya quedó configurado el 2026-08-28.
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
