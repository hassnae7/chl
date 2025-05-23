const edad = parseInt(prompt("cuantos anos tienes?"));

if (isNaN(edad)) {
    alert("Por favor, introduce una edad valida");
} else {
    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}

/* isNaN : verifica se es el numero valido*/
/* alert : mostrar informacion o avisos rapidament*/