//! Comentarios de una sola línea
// Este es un comentario de una sola linea
let x=5 //Esta linea define una variable x con el valor de 5 

//! Comentarios de varias líneas
/*
Este es un comentario de varias lineas
que se utiliza para explicar un bloque de 
codigo
*/
let y=5

let a=/*porque no hay mejor nombre*/12
console.log(a)
//! Documentación
/**
 * Calcula el área de un circulo
 * @param {number} radio - El radio del circulo
 * @returns {number} - El área del circulo
 *
  */ 
 function calcularAreaCircular(radio) {
    return Math.PI * radio * radio
 }

//! Alternar código

/*
var z=5
console.log(z)
*/
let zz=10;
console.log(zz);