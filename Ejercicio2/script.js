//2. Crea un programa que solicite al usuario 2 números entre 1 y 50. 
//Posteriormente mostrar en consola los números del 1 hasta el 50, 
//pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados 
//por el usuario.

let num1 = parseInt(prompt("Ingresa un número entre 1 y 50:"));
let num2 = parseInt(prompt("Ingresa otro número entre 1 y 50:"));

console.log("Números del 1 al 50 y ganadores de la loteria:");

let i = 0;
if (i <= 51) {
    while (i <= 50) {
        if (i === num1 || i === num2) {
            console.log(i + " ¡Lotería!");
            i = i + 1;
        } else {
            console.log(i);
            i = i + 1;
        }
    }
}
else {
    console.log('termino el proceso');
}