/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//comentario 1 linea

// 2. Escribe un comentario en varias líneas
/*
comentario varias
lineas
seguidas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let varString = "mi string"
let varNum = 1
let varBool = false
let varUndefine
let varNull = null
let varMySymbol = Symbol("nocambia")
let varBigInt = BigInt(123456789012345678901234567890)


// 4. Imprime por consola el valor de todas las variables
console.log(varString)
console.log(varNum)
console.log(varBool)
console.log(varUndefine)
console.log(varNull)
console.log(varMySymbol)
console.log(varBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof varString)
console.log(typeof varNum)
console.log(typeof varBool)
console.log(typeof varUndefine)
console.log(typeof varNull)
console.log(typeof varMySymbol)
console.log(typeof varBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
varString = "mi cadena"
varNum = 0
varBool = true
varUndefine
varNull = 5
varMySymbol = Symbol("sicambia")
varBigInt = BigInt(99999999999999999999999999)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
varString = 0
varNum = "Hola"
varBool = 45
varUndefine = "A"
varNull = "HECHO"
//varMySymbol = mySymbol(13) //error
varBigInt = BigInt(1)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const VarStr = "Mi viejo"
const VarNumero = 789
const VarBooleano = true
//const VarIndefinido
const VarNulo = null
const VarMiSimbolo = ("parasiempre")
const VarEnteroGrande = 123456789987654321123456789

// 9. A continuación, modifica los valores de las constantes
//VarStr = "se puede?" //error
/*VarNumero = 321
VarBooleano = false
VarIndefinido = 1
VarNulo = "aa"
VarMiSimbolo = ("nuncajamas")
VarEnteroGrande = .1
error no se puede modificar las constantes
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse