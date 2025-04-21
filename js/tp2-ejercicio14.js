//14- Realiza un script que pida una cadena de texto 
// y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const cadenaTexto = prompt("Ingrese una cadena de texto: ");
let cadenaFinal = ""
console.log(cadenaTexto)
console.log(cadenaTexto.length)
for(let i=0; i<cadenaTexto.length;i++){
    if (i!=0){
        cadenaFinal = cadenaFinal + "-" + cadenaTexto.charAt(i)
    } else{
        cadenaFinal = cadenaFinal + cadenaTexto.charAt(i)
    }
}

document.writeln(cadenaFinal)