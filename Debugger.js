// ¿Qué es la depuración?
// La depuración es el proceso de identificar, analizar y corregir errores en el código.
// El objetivo es comprender cómo se está ejecutando el programa y encontrar la causa raíz de los errores.
// La depuración es esencial para garantizar un código correcto y funcional.

function fechaActual() {
    let hoy=new Date()
    let dia=hoy.getDate()
    let name="maria"
    return dia
}
function outer() {
    let name="outer"
    let str =inner()
    return str
}
function inner() {
    let name="inner"
    return "Hola desde inner"
}
console.log(outer())
//console.log(fechaActual());

let end = 2; 
for(let i=1; i<=end; i++) { 
    console.log(i); 
}
