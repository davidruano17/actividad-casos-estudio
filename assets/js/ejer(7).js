function calcSalario() {
    let horas = Number(document.getElementById("horas").value);
    let tarifa = Number(document.getElementById("tarifa").value);

    let total = horas <= 40
        ? horas * tarifa
        : (40 * tarifa) + ((horas - 40) * tarifa * 1.5);

    document.getElementById("resultado").textContent =
    "Salario del trabajador es: $ " + total;
}