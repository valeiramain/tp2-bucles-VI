
//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
// si la edad ingresada no es un número válido indicarlo en un mensaje.


const edad = parseInt(prompt("Ingrese la edad del Conductor: "))

if(!isNaN(edad)){
    if (edad>=18 && edad<=80){
        document.writeln("Ya puede conducir")
    }else{
        document.writeln("No tiene edad para conducir")
    }
}else{
    document.writeln("La edad ingresada no es un número válido")
}
