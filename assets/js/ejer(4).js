function calcTCC() {
    let peso = Number(document.getElementById("peso").value);
    let zona = Number(document.getElementById("zona").value);

    if (peso > 85) {
        document.getElementById("resultado").textContent =
        `El paquete con peso de ${peso} kg excede el peso permitido`;
        return;
    }

    let costo;
    switch (zona) {
        case 1: costo = 210; break;
        case 2: costo = 180; break;
        case 3: costo = 220; break;
        case 4: costo = 340; break;
        case 5: costo = 370; break;
        default:
            document.getElementById("resultado").textContent = "¡Zona no valida!";
            return;
    }

    let total = peso * 1000 * costo;
    document.getElementById("resultado").textContent = "Valor: $ " + total;
}