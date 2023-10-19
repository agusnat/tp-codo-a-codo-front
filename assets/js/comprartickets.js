const btnReset = document.getElementById("btnReset");
const btnResumen = document.getElementById("btnResumen");

btnReset.addEventListener("click",(e)=>{
    document.getElementById("formularioDeCompra").reset();
});

btnResumen.addEventListener("click",(e)=>{
    let inputCategoria = document.getElementById("inputCategoria");
    let inputCantidad = document.getElementById("inputCantidad");
    
    let precioTotal = 200 * inputCantidad.value;
    let precioConDescuento = precioTotal - (precioTotal * (inputCategoria.value / 100));

    document.getElementById("precioTotal").innerText = precioConDescuento;
});