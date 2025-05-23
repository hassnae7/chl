function sumar() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var suma = numero1 + numero2;
    
    var result = document.getElementById("suma");
    result.innerText = suma;
}
