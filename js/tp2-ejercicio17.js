//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:
// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1

let cadenaTexto = prompt("Ingrese una cadena de texto: ");
console.log(cadenaTexto)

if (cadenaTexto !== "" && cadenaTexto !== null) {
    cadenaTexto = cadenaTexto.toUpperCase()
    let vocal = "";
    let i = 0
    while (vocal === "") {
        if (cadenaTexto.charAt(i) === "A" || cadenaTexto.charAt(i) === "E" || cadenaTexto.charAt(i) === "I" || cadenaTexto.charAt(i) === "O" || cadenaTexto.charAt(i) === "U") {
            vocal = cadenaTexto.charAt(i)
            document.writeln(`La vocal ${vocal} está en la posición ${i}`)
        }
        i = i + 1;
    }
} else {
    document.writeln(`Operación Inválida`)
}
