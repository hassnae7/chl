let numero = prompt("escribe un numero positivo");
let resultado = "";

for(let i = 1; i <= numero; i += 2) {
    resultado += i + "";
}
/* quitar ultima coma y espacio : slice ()*/
console.log("numeros impares:" + resultado.slice(0, -2));
/*numeros impares : 1,3,5,7,9,11..*/