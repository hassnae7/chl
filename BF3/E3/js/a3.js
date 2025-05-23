function generarFrase(animal, sexo, hijos) {
    let rol;
    let articulo;
    let textohijos;

    if (sexo === 'mujer') {
        rol = 'mama';
        articulo = 'La';
    }else {
        rol = 'papa';
        articulo = 'El';
    }

    if (hijos === 1) {
        textohijos = '1 hijo';
    } else {
        textohijos =`${hijos} hijos`;
    }

    /*para insertar variables fácilmente dentro de un texto,se llama template string*/
    console.log(`${articulo} ${rol} ${animal} tiene ${textohijos}`);
}

generarFrase('Edu', 'hombre', 7);
generarFrase('Elena', 'mujer', 3);
generarFrase('Eugeni','hombre', 0);