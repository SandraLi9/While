//1. Crea un programa que pregunte al usuario un número. 
//Mostrar los números que son múltiplos de 5 desde 1 hasta
//el número introducido por el usuario.

let numero = parseInt(prompt("Ingresa Un Numero:"));

if (isNaN(numero)) {
    alert("El número introducido no tiene multiplos de 5.");
}

else {
    var contador = 1;
    var multiplos = "";
    while (contador <= numero) {
        if (contador % 5 === 0) { multiplos += contador + ", "; }
        contador++;
    }
}
contador++;

if (multiplos.length > 0) {

    alert("Los múltiplos de 5 hasta " + numero + " son: " + multiplos);
}

else {
    alert("No hay múltiplos de 5 hasta " + numero + ".");
}

