// <!-- <var datos = [];

// function agregarDatos() {
//     var nombre = document.getElementById("nombre").value;
//     var puesto = document.getElementById("puesto").value;
//     var localizacion = document.getElementById("localizacion").value;
//     if (nombre && puesto && localizacion) {
//         var registro = "Nombre: " + nombre + ", Puesto: " + puesto + ", Localización: " + localizacion;
//         datos.push(registro);
//         document.getElementById("nombre").value = "";
//         document.getElementById("puesto").value = "";
//         document.getElementById("localizacion").value = "";
//     } else {
//         alert("Por favor, complete todos los campos.");
//     }
// } -->




// <!DOCTYPE html>
// <html lang="es">
// <head>
//   <meta charset="UTF-8">
//   <title>Descargar JSON</title>
// </head>
// <body>
//   <h1>Descargar usuarios desde localStorage</h1>
//   <button id="btn-descargar">Descargar JSON</button>
//   <button id="ver">Ver usuarios</button>

//   <div id="lista"></div>

//   <!-- 🔹 Filtro por edad -->
//   <button id="filtrar">Filtrar por edad</button>
//   <label for="filtroEdad">Edad mínima:</label>
//   <input type="number" id="filtroEdad" placeholder="ej. 26">
//   <div id="listaEdad"></div>
//   <script>


    //Ejemplo 1
    localStorage.setItem("nombre", "Ana");
    let valor = localStorage.getItem("nombre");
    console.log(valor); // "Ana"



    //Ejemplo 2
        const usuarios = [
        { nombre: "Ana", edad: 25 },
        { nombre: "Pedro", edad: 28 }
        ];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        const datos = JSON.parse(localStorage.getItem("usuarios"));
        //Una manera sencilla
        console.log(datos[0].edad); // 25
        //Para todos
        datos.forEach(usuario => {
        console.log(usuario.nombre, usuario.edad);
      
    });


    //Ejemplo 3 ,puede ser un pequeño lío, no mezcles!!!!!!
    document.getElementById("btn-descargar").addEventListener("click", () => {
      const datos = [
        { nombre: "Ana",  edad: 25 },
        { nombre: "Luis", edad: 30 }
      ];
      descargarJSON(datos); // descarga usuarios.json
    });


  

        // Función para descargar JSON
      function descargarJSON(datos, nombre = "usuarios.json") {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(
      new Blob([JSON.stringify(datos, null, 2)], { type: "application/json" }));
      a.download = nombre;
      a.click();
      URL.revokeObjectURL(a.href);
    }



    // Mostrar usuarios en formato amigable SOLO al pulsar el botón
    document.getElementById("ver").addEventListener("click", () => {
      const lista = document.getElementById("lista");
      lista.innerHTML = ""; // limpiar antes de mostrar
      const datos = JSON.parse(localStorage.getItem("usuarios") || "[]");

      datos.forEach((u, i) => {
        const div = document.createElement("div");
        div.className = "usuario";
        div.innerHTML = `<strong>Usuario ${i+1}</strong><br>
                         Nombre: ${u.nombre}<br>
                         Edad: ${u.edad}<br>
                         Coche: ${u.coche}`;
        lista.appendChild(div);
      });
    });



 // Mostrar usuarios con filtro
    document.getElementById("filtrar").addEventListener("click", () => {
      const lista = document.getElementById("listaEdad");
      lista.innerHTML = ""; // limpiar antes de mostrar

      const filtroEdad = parseInt(document.getElementById("filtroEdad").value, 10);
      const datos = JSON.parse(localStorage.getItem("usuarios") || "[]");

      // aplicar filtro si hay valor
      const filtrados = isNaN(filtroEdad) 
        ? datos 
        : datos.filter(u => u.edad >= filtroEdad);

      if (filtrados.length === 0) {
        lista.innerHTML = "<p>No hay usuarios que cumplan el filtro.</p>";
        return;
      }

      filtrados.forEach((u, i) => {
        const div = document.createElement("div");
        div.className = "usuario";
        div.innerHTML = `<strong>Usuario ${i+1}</strong><br>
                         Nombre: ${u.nombre}<br>
                         Edad: ${u.edad}<br>
                         Coche: ${u.coche || "—"}`;
        lista.appendChild(div);
      });
    });


    // Para limpiar localStorage:
    // localStorage.removeItem("nombre");
    // localStorage.clear();
//   </script>
// </body>
// </html>
