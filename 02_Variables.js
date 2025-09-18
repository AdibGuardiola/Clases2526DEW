// Tipos de variables

let nombre = 'Carlos';
let correo = 'correo@correo.com';
correo = 'correo2@correo.com'; // ahora sí se puede reasignar porque usamos let
var edad;
const ubicacion = "España"; // Es obligatorio devlarar de inicio un valor

console.log(correo);

let persona, pais, direccion;
persona = 100; // solo asignamos valor
console.log(persona);

//Con cons no se puede redeficir una variable
// const Resultado = 4 + 4;
// const Resultado = 2 * 4; // ❌ Error: "Identifier 'Resultado' has already been declared"
//console.log(Resultado);

let Resultado = 4 + 4;
Resultado = 2 * 8; // se puede reasignar
console.log(Resultado);

let primerdato = 'Carlos';
let segundodato = 'Perez';
let mivariablecompleta = primerdato + segundodato;
console.log(mivariablecompleta);


// Boolean con let (puede cambiar)
let encendido = true;
console.log("¿La luz está encendida?", encendido); // true

encendido = false; // lo cambiamos
console.log("¿La luz está encendida?", encendido); // false

// Boolean con const (no puede cambiar)
const esMayorDeEdad = true;
console.log("¿Es mayor de edad?", esMayorDeEdad); // true

// esMayorDeEdad = false; ❌ error, porque es const