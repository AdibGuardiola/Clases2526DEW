// <!-- <!DOCTYPE html>
// <html lang="es">
// <head>
//   <meta charset="UTF-8">
//   <title>Modal simple</title>
//   <style>
//     /* Fondo oscuro del modal */
//     .backdrop {
//       position: fixed;
//       inset: 0;
//       background: rgba(0,0,0,0.5);
//       display: none;             /* oculto al inicio */
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
//   </style>
// </head>
// <body>
//   <button id="abrir">Abrir modal</button>

//   <div class="backdrop" id="backdrop">
//     <div class="modal">
//       <p>¡Hola! Soy un modal 👋</p>
//       <button id="cerrar">Cerrar</button>
//     </div>
//   </div>

//   <script> -->
    const abrir = document.getElementById("abrir");
    const cerrar = document.getElementById("cerrar");
    const backdrop = document.getElementById("backdrop");

    abrir.addEventListener("click", () => {
      backdrop.style.display = "flex"; // muestra modal
    });

    cerrar.addEventListener("click", () => {
      backdrop.style.display = "none"; // oculta modal
    });

    // Cerrar haciendo clic fuera de la caja
    backdrop.addEventListener("click", e => {
      if (e.target === backdrop) {
        backdrop.style.display = "none";
      }
    });
//   <!-- </script>
// <!-- </body> -->
// <!-- </html> -->
