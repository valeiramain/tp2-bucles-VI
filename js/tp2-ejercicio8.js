//8- Crea script para generar pirámide siguiente con los números del 1 al número que 
// indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

const renglones = parseInt(prompt("Ingrese la cantidad de números de la pirámide, no mayor a 50: "))

if ((renglones >= 1) && (renglones <= 50)) {
    for (let i = 1; i <= renglones; i++) {
        for (let repeticiones = 1; repeticiones <= i; repeticiones++) {
            document.writeln(repeticiones)
        }
        document.writeln("<br>")
    }
} else {
    document.writeln("Operacióm Inválida")
}



