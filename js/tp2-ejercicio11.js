//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

const edad1 = parseInt(prompt(`Ingrese Edad de persona N°1: `))
const nombre1 = prompt(`Ingrese Nombre de persona N°1: `)
const edad2 = parseInt(prompt(`Ingrese Edad de persona N°2: `))
const nombre2 = prompt(`Ingrese Nombre de persona N°2: `)
const edad3 = parseInt(prompt(`Ingrese Edad de persona N°3: `))
const nombre3 = prompt(`Ingrese Nombre de persona N°3: `)

if (!isNaN(edad1) && !isNaN(edad2) && !isNaN(edad3)) {
    if ((edad1 === edad2) && (edad2 === edad3) && (edad1 === edad3)) {
        document.writeln(`${nombre1}, ${nombre2} y ${nombre3} tienen ${edad1} años.`);
    } else {
        if (edad1 > edad2) {
            if (edad1 > edad3) {
                document.writeln(`${nombre1} es el mayor.`);
            } else {
                document.writeln(`${nombre3} es el mayor.`);
            }
        } else if (edad2 > edad3) {
            document.writeln(`${nombre2} es el mayor.`);
        } else if (edad3 > edad1) {
            document.writeln(`${nombre3} es el mayor.`);
        } else {
            document.writeln(`${nombre1} es el mayor.`);
        }
    }
} else {
    document.writeln("Operación inválida");
}
