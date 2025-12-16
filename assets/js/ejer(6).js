function ejer6() {
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio;

    if (cantidad >= 1000) {
        precio = 49850;
    } else {
        precio = 71290;
    }

    document.getElementById("resultado").innerHTML =
        "Total a pagar es: $ " + (cantidad * precio);
}
