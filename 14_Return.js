
//1 ejemplo sin return ,no se guarda el resultado

// const operacion = (tipo, numero1, numero2) => {
//     if (tipo === 'suma') {
//         console.log(numero1 + numero2);
//     } else if (tipo === 'resta') {
//         console.log(numero1 - numero2);
//     }
    
   
// };

// operacion('suma', 100, 11);


//2 ejemplo

// const operacion2 = (tipo, numero1, numero2) => {
//     if (tipo === 'suma') {
//         return numero1 + numero2;
//     } else if (tipo === 'resta') {
//         return numero1 - numero2;
//     }
// };

// const resultado = operacion2('suma', 100, 11);
// console.log("El resultado es:", resultado); 



// //3 ejemplo


// const operacion = (tipo, numero1, numero2) => {
//     let resultado;
//     if (tipo === 'suma') {
//         resultado = numero1 + numero2;
//     } else if (tipo === 'resta') {
//         resultado = numero1 - numero2;
//     }

//     return resultado;
// };

// const miVariable = operacion('resta', 100, 11);
// console.log(miVariable); 




// //4 ejemplo

const operacion = (tipo, numero1, numero2) => {
    if (tipo === 'suma') {
        return numero1 + numero2;
    } else if (tipo === 'resta') {
        return numero1 - numero2;
    }
};

const miVariable = operacion('suma', 150, 111);
console.log(miVariable);
