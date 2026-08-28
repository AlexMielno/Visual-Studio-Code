function solicitarServicio() {
    const serviciosSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    const servicios = [];
    serviciosSeleccionados.forEach((servicio)=>servicios.push(servicio.value));
const parrafo = document.getElementById('prueba');
parrafo.innerHTML = `Has solicitado los siguientes servicios:<br>${servicios.join('<br>')} `;
}