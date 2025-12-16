function ejer1() {
    let personas = Number(document.getElementById("personas").value);
    let total;

    if (personas <= 0) {
        document.getElementById("resultado").innerHTML = "¡Ingrese un numero valido!";
        return;
    }

    if (personas <= 200) {
        total = personas * 25000;
    } else if (personas <= 300) {
        total = personas * 18500;
    } else {
        total = personas * 16000;
    }

    document.getElementById("resultado").innerHTML =
        "El presupuesto es: $ " + total;
}
