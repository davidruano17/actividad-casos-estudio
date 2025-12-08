function calcPanela() {
    let tipo = document.getElementById("tipo").value;
    let tam = Number(document.getElementById("tam").value);
    let precio = Number(document.getElementById("precio").value);
    let kilos = Number(document.getElementById("kilos").value);

    let precioFinal;

    if (tipo === "P1" || tipo === "p1") {
        precioFinal = tam === 1 ? precio + 1200 : precio + 830;
    } else if (tipo === "P2" || tipo === "p2") {
        precioFinal = tam === 1 ? precio - 540 : precio - 350;
    } else {
        document.getElementById("resultado").textContent = "Tipo no valido";
        return;
    }

    let total = precioFinal * kilos;
    document.getElementById("resultado").textContent = "La ganancia es: $ " + total;
}