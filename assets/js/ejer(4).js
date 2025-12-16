function ejer4() {
    let peso = Number(document.getElementById("peso").value);
    let zona = Number(document.getElementById("zona").value);
    let costo;

    if (peso > 85) {
        document.getElementById("resultado").innerHTML =
            "El paquete con peso de " + peso + " kg excede el peso permitido";
        return;
    }

    if (zona === 1) costo = 210;
    else if (zona === 2) costo = 180;
    else if (zona === 3) costo = 220;
    else if (zona === 4) costo = 340;
    else if (zona === 5) costo = 370;
    else {
        document.getElementById("resultado").innerHTML = "¡Zona no valida!";
        return;
    }

    document.getElementById("resultado").innerHTML =
        "Valor: $ " + (peso * 1000 * costo);
}
