//15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Ingrese una cadena de texto: ")
console.log(texto)

if (texto !== "" && texto !== null) {
    const cadenaTexto = texto.toUpperCase();
    let vocales = 0

    for (let i = 0; i < cadenaTexto.length; i++) {
        if ((cadenaTexto.charAt(i)) === "A" || (cadenaTexto.charAt(i)) === "E" || (cadenaTexto.charAt(i)) === "I" || (cadenaTexto.charAt(i)) === "O" || (cadenaTexto.charAt(i)) === "U") {
            vocales++
        }
    }

    if (vocales !== 0) {
        document.writeln(`La cantidad de vocales del texto es ${vocales}`)
    } else {
        document.writeln(`El texto no tiene vocales`)
    }
} else {
    document.writeln(`Operación Inválida`)
}