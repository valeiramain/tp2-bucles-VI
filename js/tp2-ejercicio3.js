//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let cadenaTotal = "";

do {
    const cadenaTexto = prompt("Ingrese una cadena de Texto: ");

    if (cadenaTexto !== null) {
        if (cadenaTotal === "") {
            cadenaTotal = cadenaTexto;
        } else {
            cadenaTotal = cadenaTotal + " - " + cadenaTexto;
        }
    }

} while (confirm("¿Desea continuar cargando texto?"));

if (cadenaTotal !== "") {
    document.writeln(cadenaTotal);
}
