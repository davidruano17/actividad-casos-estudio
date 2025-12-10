function riesgo() {
    let n = Number(document.getElementById("nivel").value);

    if (n === 1) {
        document.getElementById("resultado").innerHTML = "Riesgo biológico";
    } else if (n === 2) {
        document.getElementById("resultado").innerHTML = "Riesgo químico";
    } else if (n === 3) {
        document.getElementById("resultado").innerHTML = "Riesgo físico";
    } else if (n === 4) {
        document.getElementById("resultado").innerHTML = "Riesgo ergonómico";
    } else if (n === 5) {
        document.getElementById("resultado").innerHTML = "Riesgo psicosocial";
    } else {
        document.getElementById("resultado").innerHTML = "Nivel de riesgo no válido.";
    }
}