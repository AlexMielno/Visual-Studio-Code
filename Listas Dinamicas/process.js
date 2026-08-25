function extraer(id, seccion) {
  //parrafo
  const contenedor = document.querySelector(id);
  const lista = contenedor.querySelectorAll("input:checked");
  const parrafo = document.querySelector("#facturado");

  let listaProducto = "";

  lista.forEach((items) => {
    listaProducto += `${items.parentElement.textContent}, `;
  });
  listaProducto += ".";
  parrafo.innerHTML = listaProducto;

  //seciones

  const section = document.querySelector(seccion);

  section.innerHTML = listaProducto;
}

function darkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("blackStyle");
  const boton = document.querySelector("#modeStyle");

  if ((boton.innerHTML === "Light Mode")) {
    boton.innerHTML = "Light Mode";
  } else {
    boton.innerHTML = "Dark Mode";
  }
}
