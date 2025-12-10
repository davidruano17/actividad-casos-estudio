function temperaturaClima() {
    let temp = parseFloat(document.getElementById("temp").value);

    if (isNaN(temp)) {
        document.getElementById("resultado").innerHTML = "Ingrese un número válido";
        return;
    }

    let diagnostico ;

    if (temp < 0) {
        diagnostico = "Clima helado";
    } else if (temp >= 0 && temp < 10) {
        diagnostico = "Clima muy frío";
    } else if (temp >= 10 && temp < 20) {
        diagnostico = "Clima frío";
    } else if (temp >= 20 && temp < 30) {
        diagnostico = "Normal";
    } else if (temp >= 30 && temp < 40) {
        diagnostico = "Hace calor";
    } else {
        diagnostico = "Hace mucho calor";
    }

    document.getElementById("resultado").innerHTML = diagnostico;
}
