function calcAudifonos() {
    let n = Number(document.getElementById("cantidad").value);
    let precio = n >= 1000 ? 49850 : 71290;
    let total = n * precio;

    document.getElementById("resultado").textContent =
    "Total a pagar es: $ " + total;
}