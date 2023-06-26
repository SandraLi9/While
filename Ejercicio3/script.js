//3. Crea un programa que solicite al usuario números, 
//si lo que este introduce es un número guardarlo en un arreglo. 
//Para terminar el capturar el usuario debe ingresar el número 0. 
//Finalmente mostrar la lista de números capturados en pantalla o en la 
//consola.

const numeros = [];
let numero = 8;
while (true) {
    let numero = parseInt(prompt("Ingresa numeros y al finalizar ingresa el numero 0: "));
    if (numero === 0) {
        break;
    }
    if (!isNaN(numero)) {
        numeros.push(numero);
    }
}
alert (`Este es el arreglo:" ${numeros}`);
