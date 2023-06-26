/*5. Crea un programa que solicite al usuario un día de la semana
 (ej: lunes, jueves, domingo, etc). El programa mostrará 
 un mensaje personalizado para cada día de la semana por 
 medio de un alert. Y seguirá pidiendo al usuario introducir otro día. 
 En caso de que el día introducido sea domingo mostrar al usuario el
  mensaje “Ve a descansar” y terminar la captura de información.*/

  while (true) {
    let dia = prompt("Introduce tu día favorito de la semana:");

    if (dia.toLowerCase() === "domingo") {
        alert("Ve a descansar 😴");
    }

    else if (dia.toLowerCase() === "lunes") {
        alert("¡Que tengas un maravilloso inicio de semana! 🌤️");
        break;
    }
    else if (dia.toLowerCase() === "martes") {
        alert("¡Un buen día para sonreír! 🙃");
        break;
    }
    else if (dia.toLowerCase() === "miercoles") {
        alert("Miercoles locochon, sigue con la mejor actitud! 🤩");
        break;
    }
    else if (dia.toLowerCase() === "jueves") {
        alert("¡A pocos días del fin de semana, disfruta el juernes 🫠");
        break;
    }
    else if (dia.toLowerCase() === "viernes") {
        alert("Es viernes y el cuerpo lo sabe 🥳");
        break;
    }
    else if (dia.toLowerCase() === "sabado") {
        alert("Comenzo el FDS, aprovecha tu sabado 💃🕺");
        break;
    }
    else {
        alert("Día no reconocido. Por favor, introduce un día válido.");
        break;
    }

}