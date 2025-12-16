function ejer7() {
    let horas = Number(document.getElementById("horas").value);
    let tarifa = Number(document.getElementById("tarifa").value);
    let salario;

    if (horas <= 40) {
        salario = horas * tarifa;
    } else {
        salario = (40 * tarifa) + ((horas - 40) * tarifa * 1.5);
    }

    document.getElementById("resultado").innerHTML =
        "Salario del trabajador es: $ " + salario;
}
