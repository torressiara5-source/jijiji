function calculaPrecio(precioUnidad, cantidad) {
    const total = precioUnidad * cantidad;
    return total;
}
function puedeReservar(remerasdisponibles) {
 return remerasdisponibles > 0;
}
const t = document.querySelector("#toca");
const contadorremeras = document.querySelector("#disponibles");
const mensaje = document.querySelector("#mensaje");

t.addEventListener("click", function() {
    const remerasDisponibles= Number(contadorremeras.textContent);
    if (puedeReservar(remerasDisponibles)) {
        contadorremeras.textContent = remerasDisponibles - 1;
        mensaje.textContent = "¡Hace clic!";  
        } else {
        t.textContent = "SOS HERMOSO❤️";
        t.disabled = true;
    }   
  })