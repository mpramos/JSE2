// Tipos de errores
//? Syntax Error

"use strict"
iff (true) {
    console.log("true")
}
//? Reference Error
let b=2
let a=b
console.log(a);

fun()
function name1(mensaje) {
    console.log(mensaje);
}
name1("mensaje")
//? TypeError
const someConstValue=5
someConstValue=7
let someNumber=10
someNumber.length()
//? RangeError

let testArray1= Array(10)
console.log(testArray1.length);
let testArray2= Array(-1)
console.log(testArray2.length);

//!try catch

try {
    // codigo a probar
} catch (error) {
    // codigo a ejecutar en caso de un error
}

try {
    let a=b
} catch (error) {
    console.log(error);
}
console.log("Hemos manejado la excepcion");

try {
    //Codigo a probar
} finally  {
    // codigo que siempre se ejecutará
}
try {
    let a=b
} catch (error) {
    console.log("Un error!");
} finally{
    console.log("Finalizado");
}
//throw
throw "Error 1"
throw 42
throw true
throw new Error('required')

const ThrowsExceptionsExameples=()=>{
    let mensaje
    let x=3
    try {
        if(x=='') throw 'empty'
        if(isNaN(x)) throw 'not a number' 
        x= Number(x)
        if(x<5) throw 'too low'
        if(x>10) throw 'too high'
    }
    catch(error){
        console.log(error);
    }
}
ThrowsExceptionsExameples()