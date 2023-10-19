const btnResumen = document.getElementById("btnResumen");
const inputCategoria = document.getElementById("inputCategoria");
const inputCantidad = document.getElementById("inputCantidad");

btnResumen.addEventListener("click",(e)=>{    
    let precioTotal = 200 * inputCantidad.value;
    let precioConDescuento = precioTotal - (precioTotal * (inputCategoria.value / 100));

    document.getElementById("precioTotal").innerText = precioConDescuento;
});