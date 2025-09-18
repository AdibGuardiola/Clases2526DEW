/** Operadores Aritmeticos
=  Operador de asignación. Se usa para asignar valores a una variable
+  Suma
-  Resta
*  Multiplicación
/  Division
%  Modulo
++ Aumento
-- Disminución
*/

const resultado = 10 + 10;
const resultado2 = 10 - 10;
const resultado3 = 10 % 3;

let numero1 = -1;
numero1--;

console.log(numero1);

// añadir valor a una variable

let numero2 = 5;
numero2 += 5;   // ahora vale 10
console.log(numero2); // 10


/*Operadores de Comparación:
Nos permiten comparar valores

==   Igual que
===  Igual en valor y typo de valor
!=   Diferente
!==  Diferente en valor y diferente en typo
>    Mayor que
<    Menor que
>=   Mayor o igual que
<=   Menor o igual que
?    Operador ternario
*/


const resultado5 = 5 > 1; 
const resultado6 = 5 == 5; // Valores iguales
const resultado7 = '5' === 5; // Valores iguales y mismo tipo en este caso me dará false ya que uno es un número y otro es una cadena de text0
const resultado8 = 7 > 9 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';

console.log(resultado7);
console.log(resultado8);