//4. Crea un programa que solicite al usuario letras o palabras, 
//si es así guardar el resultado. Para terminar de capturar el usuario 
//no debe escribir valor alguno. Al terminar de capturar, mostrar en 
//pantalla la concatenación de todas las palabras capturadas.

const palabras = [];
while (true) {
    let entrada = prompt("Ingresa una letra o palabra (deja un vacío para terminar):");
    if (entrada === "") {
        break;
    }
    palabras.push(entrada);
}

console.log("Palabras capturadas:", palabras);
var palabrasFinal = palabras.join(" ");
console.log("Palabras capturadas:", palabrasFinal);
document.write(palabrasFinal)
