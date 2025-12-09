function ejer10(){
let numero = Number(document.getElementById("num1").value);

if (numero = parseFloat)  {
    document.getElementById("resultado").innerHTML = "Por favor, ingrese un número válido";

} else {
    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = "El número es par";    
    } else {
        document.getElementById("resultado").innerHTML = "El número es impar";    
    }  
}   
}
