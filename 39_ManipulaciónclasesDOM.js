// <!DOCTYPE html>
// <html lang="es">
// <head>
//   <meta charset="UTF-8">
//   <title>Manipulación de clases CSS con JavaScript (classList)</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       text-align: center;
//       background-color: #f0f0f0;
//     }

//     h1 {
//       margin-top: 30px;
//     }

//     #contenedor1 {
//       margin-top: 30px;
//     }

//     .caja {
//       width: 150px;
//       height: 150px;
//       background-color: lightgray;
//       border: 2px solid #333;
//       margin: 20px auto;
//       transition: 0.3s;
//     }

//     .activa {
//       background-color: dodgerblue;
//       transform: scale(1.1);
//       border-color: white;
//     }

//     /* Lista que se ocultará y mostrará */
//     #lista {
//       list-style: none;
//       padding: 0;
//       margin-top: 20px;
//       transition: opacity 0.4s ease;
//     }

//     #lista li {
//       background: white;
//       margin: 5px auto;
//       width: 200px;
//       padding: 8px;
//       border-radius: 5px;
//       box-shadow: 0 0 5px rgba(0,0,0,0.2);
//     }

//     /* Clase para ocultar la lista */
//     .oculta {
//       display: none;
//     }

//     /* Botones */
//     button {
//       margin: 5px;
//       padding: 10px 15px;
//       border: none;
//       background-color: #333;
//       color: white;
//       cursor: pointer;
//       border-radius: 5px;
//     }

//     button:hover {
//       background-color: #555;
//     }
//   </style>
// </head>
// <body>

//   <h1>Manipulación de clases CSS con JavaScript</h1>

//   <div id="contenedor1">
//     <div class="caja"></div>
//   </div>

//   <div>
//     <button onclick="agregarClase()">Agregar clase</button>
//     <button onclick="eliminarClase()">Eliminar clase</button>
//     <button onclick="toggleClase()">Alternar clase</button>
//     <button onclick="comprobarClase()">Comprobar clase</button>
//   </div>

//   <hr>

//   <!-- Nueva sección: lista que aparece y desaparece -->
//   <h2>Lista de elementos</h2>
//   <button onclick="toggleLista()">Mostrar / Ocultar lista</button>

//   <ul id="lista" class="oculta">
//     <li>Elemento 1</li>
//     <li>Elemento 2</li>
//     <li>Elemento 3</li>
//   </ul>

//   <script>
    // --- Manipulación de clases en la caja ---
    const primeraCaja = document.querySelector('#contenedor1 .caja');

    const agregarClase = () => {
      primeraCaja.classList.add('activa');
    };

    const eliminarClase = () => {
      primeraCaja.classList.remove('activa');
    };

    const toggleClase = () => {
      primeraCaja.classList.toggle('activa');
    };

    const comprobarClase = () => {
      if (primeraCaja.classList.contains('activa')) {
        console.log('La caja tiene la clase "activa"');
      } else {
        console.log('La caja no tiene la clase "activa"');
      }

      console.log('Clases actuales:');
      primeraCaja.classList.forEach((clase) => {
        console.log(clase);
      });
    };

    // --- Nueva función: mostrar / ocultar lista ---
    const lista = document.getElementById('lista');

    const toggleLista = () => {
      lista.classList.toggle('oculta');
    };
//   </script>

// </body>
// </html>
