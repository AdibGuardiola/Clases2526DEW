// <!DOCTYPE html>
// <html lang="es">
// <head>
//   <meta charset="UTF-8">
//   <title>Modal con números</title>
//   <style>
//     /* Fondo oscuro del modal */
//     .backdrop {
//       position: fixed;
//       inset: 0;
//       background: rgba(0,0,0,0.5);
//       display: none;             
//       align-items: center;
//       justify-content: center;
//     }
    
//     /* Caja del modal */
//     .modal {
//       background: #fff;
//       padding: 20px;
//       border-radius: 8px;
//       min-width: 200px;
//       text-align: center;
//     }

//     .numeros {
//       margin-top: 15px;
//       font-size: 18px;
//       font-weight: bold;
//     }

//     button {
//       margin: 5px;
//     }
//   </style>
// </head>
// <body>
//   <button id="abrir">Abrir modal</button>

//   <div class="backdrop" id="backdrop">
//     <div class="modal">
//       <p>¡Hola! Soy un modal 👋</p>
//       <button id="añadir">Añadir número</button>
//       <button id="cerrar">Cerrar</button>
//       <div class="numeros" id="numeros"></div>
//     </div>
//   </div>

//   <script>
    const abrir = document.getElementById("abrir");
    const cerrar = document.getElementById("cerrar");
    const backdrop = document.getElementById("backdrop");
    const añadir = document.getElementById("añadir");
    const numerosDiv = document.getElementById("numeros");

    let contador = 0;

    abrir.addEventListener("click", () => {
      backdrop.style.display = "flex"; 
    });

    cerrar.addEventListener("click", () => {
      backdrop.style.display = "none"; 
    });

    // Cerrar haciendo clic fuera de la caja
    backdrop.addEventListener("click", e => {
      if (e.target === backdrop) {
        backdrop.style.display = "none";
      }
    });

    // Añadir números dentro del modal
    añadir.addEventListener("click", () => {
      contador++;
      const numero = document.createElement("p");
      numero.textContent = contador;
      numerosDiv.appendChild(numero);
    });
//   </script>
// </body>
// </html>
