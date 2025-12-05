function ejer9(){
let tipo = document.getElementById("num1").value;
let grosor = Number(document.getElementById("num1").value);
let diametro = Number(document.getElementById("num1").value);
let marca = document.getElementById("num1").value;

if (diametro > 1.4) {
    console.log("La rueda es para un vehículo grande");
} 
else if (diametro <= 1.4 && diametro > 0.8) {
    alert("La rueda es para un vehículo mediano");
} 
else {
    console.log("La rueda es para un vehículo pequeño");
}


// ------------------------------
//   PARTE B: Validación de grosor recomendado
// ------------------------------

// Condición 1: diámetro > 1.4 y grosor < 0.4
// Condición 2: diámetro <= 1.4 y > 0.8 y grosor < 0.25

if ((diametro > 1.4 && grosor < 0.4) ||
    (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {

    console.log("El grosor para esta rueda es inferior al recomendado");
}

}