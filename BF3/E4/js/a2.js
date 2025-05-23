const contrasenareal = "misecrito";

const entradaUsuario = prompt("introduce la contrasena");

if(entradaUsuario && entradaUsuario.toLowerCase() === contrasenareal.toLowerCase()) {
    alert("contraseña bien");
} else {
    alert("contraseña mal");
}