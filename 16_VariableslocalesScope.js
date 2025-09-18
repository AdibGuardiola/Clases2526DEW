/*
    Local Scope o Variables Locales
    - Son las variables declaradas dentro de una función.
    - Solo podemos acceder a ellas desde dentro de la función.
*/

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} numero de letras`);
};

obtenerNumeroLetras('Carlos');

//Ejercicio 2 función anidada
var numero = 1;

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
        console.log(numero);
    };

    funcionAnidada();
};

obtenerNumeroLetras('Alex');
// console.log(numero);
