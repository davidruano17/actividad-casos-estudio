function ejer9(){
let tipo = document.getElementById("tipo").value;
let grosor = Number(document.getElementById("grosor").value);
let diametro = Number(document.getElementById("diametro").value);
let marca = document.getElementById("marca").value;

if (diametro > 1.4) {
    document.getElementById("resultado").innerHTML = "La rueda es para un vehículo grande" ;
} 
else if (diametro <= 1.4 && diametro > 0.8) {
    document.getElementById("resultado").innerHTML = "La rueda es para un vehículo mediano" ;
} 
else {
    document.getElementById("resultado").innerHTML = "La rueda es para un vehículo pequeño" ;

}


if ((diametro > 1.4 && grosor < 0.4) ||
    (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {

    console.log("El grosor para esta rueda es inferior al recomendado");
    document.getElementById("resultado").innerHTML = "El grosor para esta rueda es inferior al recomendado" ;
}

}