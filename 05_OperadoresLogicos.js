/* Operadores Lógicos
&&  And
||  OR
!   NOT
*/

// const nombre = 'Carlos';
// const edad = 16;
// const entrada = true;
// const permiso = false;

const usuario = {
  nombre: "Carlos",
  edad: 16,
  entrada: true,
  permiso: false
};


// operador AND &&
const permitirAcceso = edad >= 18 && entrada;
console.log('Acceso permitido:' + permitirAcceso);

//Poder valor en el HTML
    document.body.innerHTML = `
      <h2>Datos del Usuario</h2>
      <p><b>Nombre:</b> ${usuario.nombre}</p>
      <p><b>Edad:</b> ${usuario.edad}</p>
      <p><b>Entrada:</b> ${usuario.entrada}</p>
      <p><b>Permiso:</b> ${usuario.permiso}</p>
    `;
// // // operador OR ||
// const permitirAcceso = (edad >= 18 && entrada) || (permiso && entrada);
// console.log('Acceso permitod:' + permitirAcceso);

// // Invierte el valor
// const permisdoAcceso = true;
// console.log(!permisdoAcceso)