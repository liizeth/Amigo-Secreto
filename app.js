// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

/*

let listAmigos =[];
let cant = listAmigos.length;

//funcion que le asigna texto en una eqtiqueta de html 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
*/




// Arreglo para almacenar los nombres
let amigos = [];

// Función para agregar un amigo al arreglo
function agregarAmigo() {
  // Obtén el valor del campo de texto
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco

  // Referencias a las listas
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    // Validación del nombre
    if ((nombre) && isNaN(nombre)) {
        // Agrega el nombre al arreglo
        amigos.push(nombre);
        
        resultado.innerHTML = `<li style="color: red;"></li>`;

        // Actualiza la lista de amigos
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        listaAmigos.appendChild(nuevoElemento);

    // Limpia
    limpiarCaja();
    } else {
      // Si el nombre está vacío, muestra un mensaje de error
        resultado.innerHTML = `<li style="color: red;">Por favor, escribe un nombre válido.</li>`;
        limpiarCaja();
    }
} 


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Función para sortear un nombre
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length > 0) {
      // Selecciona un nombre al azar
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const nombreSorteado = amigos[indiceAleatorio];

        //listaAmigos.style.display = "none";

      // Muestra el nombre sorteado
        resultado.innerHTML = `<li style="color: green;">El amigo sorteado es: <strong>${nombreSorteado}</strong></li>`;
    } else {
      // Si no hay nombres en el arreglo
        resultado.innerHTML = `<li style="color: red;">No hay nombres en la lista para sortear.</li>`;
    }
}