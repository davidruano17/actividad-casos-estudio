function parrillada() {
let personas = Number(document.getElementById("personas").value);

 if (personas <= 0) {
        document.getElementById("resultado").textContent = "¡Ingrese un numero valido!";
        return;
    }

    let costo = personas <= 200 ? 25000 :
                personas <= 300 ? 18500 : 16000;

    document.getElementById("resultado").textContent =
        "Presupuesto: $ " + (personas * costo);
}
