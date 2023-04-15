
//! Funcion de construcción primitiva:
let stringNumber1=20;
let stringNumber= String(25);
console.log(stringNumber1)
console.log(typeof stringNumber1)

console.log(stringNumber)
let booleanValue= Boolean('hola')
console.log(booleanValue)
console.log(typeof booleanValue)
//! Conversiones primitivas : se producen de manera automática
//! cuando se usan valores de diferentes tipos de datos de una expresion 

let resultado= 10 + '5' //'10' +'5'//'105' // 'maria' + 'eduarda'//'mariaeduarda'
console.log(resultado)
console.log(typeof resultado)
//? Conversion a String(cadena)
let numero=28; //Number
let stringNumber2=String(numero)
console.log( stringNumber2)
console.log(typeof stringNumber2)
//? Conversion a Booleano
let stringValue='false'
console.log(stringValue)
console.log(typeof stringValue)
let boleanValue=Boolean(stringValue)
console.log('valor de salida',boleanValue)
console.log(typeof boleanValue)

//! Conversiones implicitas :

//?1 Comcatenacion de cadenas y números:
const num=42
const str="La respuesta es " + num //Conversion implicita de numero a cadena
console.log(str)
console.log(typeof str)
/*
    Este es un bloque
    de comentarios y puede
    abarcar varias líneas

    Entonces este código no se ejecutará
    console.log("¡Hola, Mundo!");
*/

let x /* porque no hay mejor nombre */ = 42;
console.log(x);



