// Fuera de la funcion no podemos acceder a la variable numero.
console.log(numero); // variable not defined

/* 📌 Block Scope o Alcance de tipo bloque
	- Son las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

let edad = 19;
if (edad >= 18) {
	const accesoPermitido = true;

	console.log(accesoPermitido); // Dentro del bloque si podemos acceder a la variable

	// Incluso dentro de otros bloques.
	if (true) {
		// Podemos acceder a la variable
		console.log(accesoPermitido);
	}
// Otro tipo de bloques son las funciones
	const miFuncion = () => {
		// Podemos acceder a la variable
		console.log(accesoPermitido);
	};
    
	miFuncion();
}
console.log(accesoPermitido); // No podemos acceder a la variable. Estamos fuera del bloque.

// La mayoria del tiempo no queremos esto, ya que las funciones muchas veces necesitaran sus propias varibles.
// Lo mejor es trabajar con const y let para evitar que fuera del bloque se puedan acceder a las variables.

if (true) {
	const nombre = 'Carlos';//Todo cambia si pongo var en lugar de const
	console.log(nombre); // Podemos acceder a la variable.
}
console.log(nombre); // No podemos acceder a la variable.