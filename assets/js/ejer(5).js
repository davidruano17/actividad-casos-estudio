function ejer5() {
    let tipo = document.getElementById("tipo").value;
    let tam = Number(document.getElementById("tam").value);
    let precio = Number(document.getElementById("precio").value);
    let kilos = Number(document.getElementById("kilos").value);

    let precioFinal;

    if (tipo === "P1") {
        if (tam === 1) precioFinal = precio + 1200;
        else precioFinal = precio + 830;
    } else if (tipo === "P2") {
        if (tam === 1) precioFinal = precio - 540;
        else precioFinal = precio - 350;
    } else {
        document.getElementById("resultado").innerHTML = "Tipo no valido";
        return;
    }

    document.getElementById("resultado").innerHTML =
        "La ganancia es: $ " + (precioFinal * kilos);
}
