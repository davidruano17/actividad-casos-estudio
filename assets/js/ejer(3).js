function ejer3() {
    let cantidad = Number(document.getElementById("cantidad").value);
    let tipo = document.getElementById("tipo").value;
    let pago = document.getElementById("pago").value;

    let precioUnit, cargo, total;

    if (tipo === "Sencilla") {
        precioUnit = 20000;
    } else if (tipo === "Doble") {
        precioUnit = 25000;
    } else {
        precioUnit = 28000;
    }

    total = cantidad * precioUnit;

    if (pago === "Tarjeta") {
        cargo = total * 0.07;
    } else {
        cargo = 0;
    }

    document.getElementById("resultado").innerHTML =
        "Precio unitario: $ " + precioUnit +
        "<br>Total sin cargo: $ " + total +
        "<br>Cargo: $ " + cargo +
        "<br>Total a pagar: $ " + (total + cargo);
}
