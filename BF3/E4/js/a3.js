const numerador = parseFloat(prompt("Escribe el primer número:"));
const denominador = parseFloat(prompt("Escribe el segundo número:"));

if (isNaN(numerador) || isNaN(denominador)) {
    alert("porfa, escribe números válidos");
}
else if (denominador === 0) {
    alert("No se puede dividir entre cero");
} else {
    const resultado = numerador / denominador;
    alert("El resultado es: " + resultado);
}