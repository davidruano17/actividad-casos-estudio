function clasificar() {
    let a = Number(document.getElementById("lado1").value);
    let b = Number(document.getElementById("lado2").value);
    let c = Number(document.getElementById("lado3").value);


    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("resultado").innerHTML = "¡Valor no valido!";
        return;
    }

    if (a === b && b === c) {
        document.getElementById("resultado").innerHTML = "Es un triángulo equilátero";
    } else if (a === b || a === c || b === c) {
        document.getElementById("resultado").innerHTML = "Es un triángulo isósceles";
    } else {
        document.getElementById("resultado").innerHTML = "Es un triángulo escaleno";
    }
}
