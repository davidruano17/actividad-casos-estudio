function ejer8(){
let numero1 = Number(document.getElementById("num1").value);
let numero2 = Number(document.getElementById("num2").value);
let numero3 = Number(document.getElementById("num3").value);

let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}
document.getElementById("resultado").innerHTML = "El numero mayor es:" + mayor;
}  