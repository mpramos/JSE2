
// bodys of functions

function suma(a,b) {
    console.log(a+b)
}
function suma(a,b) {
    return (a+b)
}

//!Funcion Anonima
let funcionAnonima=function () {
    console.log("Soy anonima");
} 
//!Función de expresion

let funcionExpresion=function (n) {
    console.log("Soy anonima" +n);
} 
funcionExpresion(2)

//! Funciones de autoinvocacion
(function (n) {
    console.log(n*n);
})(2)

let cuadrado=(function (n) {
    return n*n;
})(4)
console.log((cuadrado));

//! funcion de flecha
let cuadrado2=n=>n*n

//! Funcion con parametros por defecto

function Saludo(nombre="Maria") {
    let mensaje=`${nombre}, hola como estas`
    return mensaje
}
console.log(Saludo());
console.log(Saludo("Oscar"));