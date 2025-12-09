function calcHamburguesas() {
    let cant = Number(document.getElementById("cantidad").value);
    let tipo = document.getElementById("tipo").value;
    let pago = document.getElementById("pago").value;

    let precioUnit = tipo === "Sencilla" ? 20000 :
                     tipo === "Doble" ? 25000 : 28000;

    let totalSin = precioUnit * cant;
    let cargo = pago === "Tarjeta" ? totalSin * 0.07 : 0;
    let total = totalSin + cargo;

    document.getElementById("resultado").innerHTML = 
        `Precio Unit: $${precioUnit}<br>
         Cantidad: ${cant}<br>
         Cargo: $${cargo}<br>
         Total: $${total}`;
}