/* 📌 Operadores de Comparación:
==   Igual que
===  Igual en valor y tipo de valor
!=   Diferente
!==  Diferente en valor y diferente en tipo
>    Mayor que
<    Menor que
>=   Mayor o igual que
<=   Menor o igual que
?    Operador ternario

📌 Operadores Lógicos
&&   And
||   OR
!    NOT
*/

// Ejemplo #1:
const usuario = {
    edad: 16,
    pais: 'Mexico',
    ticket: true,
};

//Ejemplo1
if (usuario.edad >= 18) {
    console.log('El usuario es mayor de edad, puede entrar al concierto.');
}else {
    console.log('El usuario es menor de edad, no puede entrar al concierto.');
}

//Ejemplo2

if (usuario.edad >= 18 && usuario.ticket) {
    console.log('El usuario es mayor de edad y tiene un ticket.');
} else {
    console.log('El usuario es menor de edad o no tiene un ticket.');
}

//Ejemplo3
if (usuario.edad >= 18) {
    if (usuario.ticket) {
        console.log('El usuario es mayor de edad y tiene ticket.');
    } else {
        console.log('El usuario es mayor de edad, pero no tiene ticket.');
    }
} else {
    console.log('El usuario es menor de edad.');
}


//Ejemplo4
if (usuario.pais === 'mexico') {
    console.log('El usuario es mexicano');
} else if (usuario.pais === 'colombia') {
    console.log('El usuario es colombiano');
} else if (usuario.pais === 'españa') {
    console.log('El usuario es español');
} else {
}
