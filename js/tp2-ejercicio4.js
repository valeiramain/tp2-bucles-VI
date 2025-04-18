//4- Realiza un script que pida números hasta que se pulse “cancelar”.
//  Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
//  Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


let suma = 0;

do {
    const numero = parseFloat(prompt("Ingrese un número: "))
    if (!isNaN(numero)){
        suma = suma + numero;
    }else{
        alert("No es un número, por favor continúe ingresando")
    }
} while (confirm("¿Desea continuar cargando números?"));

if (suma!=0){
    document.writeln("La suma total de los números ingresados es = "+suma)
}

