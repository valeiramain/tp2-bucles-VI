//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)
//  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

const renglones = parseInt(prompt("Ingrese la cantidad de renglones, no mayor a 50: "))

if ((renglones>=1) && (renglones <= 50)) {
    for (let i = renglones; i >= 1; i--) {
            for (let repeticiones = 0; repeticiones < i; repeticiones++) {
            document.writeln(i)
        }
        document.writeln("<br>")
    }
} else {
    document.writeln("Operacióm Inválida")
}

