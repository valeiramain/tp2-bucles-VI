//16- Realiza un script que pida una cadena de texto y la devuelva al revés.
//  Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


const cadenaTexto = prompt("Ingrese una cadena de texto: ");
let cadenaAlReves = ""

if (cadenaTexto !== "" && cadenaTexto !== null) {
    for (let i = cadenaTexto.length - 1; i >= 0; i--) {
        cadenaAlReves = cadenaAlReves + cadenaTexto.charAt(i)
    }
    document.writeln(`La cadena ingresada: ${cadenaTexto}, queda escrita al revés: ${cadenaAlReves}`)
} else {
    document.writeln(`Operación Inválida`)
}