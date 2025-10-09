// <!DOCTYPE html>
// <html lang="es">
// <head>
// <meta charset="UTF-8">
// <title>Ejemplo fácil de setInterval</title>
// </head>
// <body>

// <p id="contador">10</p>

// <script>
let numero = 10;                         // empezamos en 10
const contador = document.getElementById("contador");

// cada 1000ms (1 segundo) ejecuta esta función:
const pepe = setInterval(()=>{
  numero--;                              // resta 1
  contador.textContent = numero;         // muestra el número en pantalla

  if(numero <= 0){                       // cuando llega a 0
    clearInterval(pepe);                 // se detiene el intervalo
    alert("¡Tiempo terminado!");
  }
},1000);
// </script>

// </body>
// </html>