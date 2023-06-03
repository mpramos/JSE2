//! Desestructuración

//? Desestructuración de arreglos

const numbers = [1, 2, 3]
//* Antes de la desestructuracion
// let numero1=numbers[0]
// let numero2=numbers[1]
// let numero3=numbers[2]
// let numero4=numbers[3]
// let numero5=numbers[4]
// console.log(numero4);
//* En la desestructuración
let [numOne, numTwo, numThree] = numbers
console.log(numTwo)
const names = ['Maria', 'Susana', 'Alfredo']
let [firstPerson, secondPerson, thirdPerson] = names
console.log(thirdPerson)
const fullstack = [
    ['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']
]
const [frontend, backend] = fullstack
console.log(backend)
//?Desestructuración durante la iteración

let paises = [['Bolivia', 'Cochabamba'], ['Argentina', 'BuenoS Aires'], ['Colombia', 'Bogotá']]
let [primerP, segundoP, tercerP] = paises
// console.log(tercerP)
// console.log(primerP)
// console.log(segundoP)
for (let [pais, ciudad] of paises) {
    console.log(ciudad, pais);
}
let emojis = ['🤓', '🚿', '🍕']
// for (let index = 0; index < emojis.length; index++) { // arreglos
//     const element = emojis[index]; //arreglos
//     console.log(element)
// }
for (let emoji of emojis) {
    console.log(emoji);
}
//? Desestructuración de objetos

let rectangulo = {
    ancho: 20,
    alto: 10,
    area: 200,
}
//* Antes de la desestructuracion
// let ancho=rectangulo.ancho;
// let alto=rectangulo.alto;
// let area=rectangulo.area;
// console.log(ancho,alto,area);
let { ancho: w, alto: h, area: a } = rectangulo
console.log(w, h, a);
//Parametro de objecto con desestruturacion
const calcularPerimetro = ({ ancho: w, alto: h }) => {
    return 2 * (w + h)
}
console.log(calcularPerimetro(rectangulo));
//?Desestructuración durante la iteración en Objetos
const listaTareas = [
    {
        tareaN: 'Tarea de matematicas ',
        hora:'20:00',
        completado:true
    },
    {
        tareaN: 'Tarea de biologia ',
        hora:'22:00',
        completado:true
    },
    {
        tareaN: 'Tarea de fisica ',
        hora:'7:00',
        completado:false
    },
]
for (const {tareaN:task,hora:time,completado:completed} of listaTareas) {
    console.log(time,completed,task);
}
//! Operador de propagación (...)

let nums=[1,2,3,4,5,6,7,8,9,10]

let [num1,num2,...rest]=nums
console.log(num1);
console.log(num2);
console.log(rest);

//? Para copiar arreglos
let pares=[0,2,4,6,8,10]
let numerosPares=[...pares]
console.log(pares);
console.log(numerosPares);
let impares=[1,3,5,7,9]
let numerosImpares=[...impares]
console.log(impares);
console.log(numerosImpares);

let todosLosNumeros=[...numerosPares,...numerosImpares]
console.log(todosLosNumeros);

let user={
    name:'Juana',
    country:'Bolivia',
    age:'20'
}

let copiedUser={...user}
console.log(copiedUser);

//? funcion de flecha

const sumAllNums=(...args)=>{
    let sum=0
    for (const num of args) {
        sum+=num
    }
    return sum
}
console.log(sumAllNums(1,2,3,4,5));












