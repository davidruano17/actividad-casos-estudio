function ejer2() {
    let precio = Number(document.getElementById("precio").value);
    let descuento, porcentaje, total;

    if (precio <= 0) {
        document.getElementById("resultado").innerHTML = "¡Ingrese un precio valido!";
        return;
    }

    if (precio > 125000) {
        porcentaje = 0.35;
    } else {
        porcentaje = 0.10;
    }

    descuento = precio * porcentaje;
    total = precio - descuento;

    document.getElementById("resultado").innerHTML =
        "Descuento: $ " + descuento +
        "<br>Porcentaje: " + (porcentaje * 100) + "%" +
        "<br>Total a pagar: $ " + total;
}
