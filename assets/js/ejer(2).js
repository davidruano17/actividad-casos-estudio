function calcularDescuento() {
    let precio = Number(document.getElementById("precio").value);

    if (precio <= 0) {
        document.getElementById("resultado").textContent = "¡Ingrese un precio valido!";
        return;
    }

    let porcentaje = precio > 125000 ? 0.35 : 0.10;
    let descuento = precio * porcentaje;
    let total = precio - descuento;

    document.getElementById("resultado").innerHTML =  `Descuento: $ ${descuento}<br>Porcentaje: ${porcentaje * 100}%<br>Total a pagar: $ ${total}`;
}