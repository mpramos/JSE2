// Arreglos
// let arr= Array(1,2,3)
let arr= Array()
// fill
let ochoValores= Array(8).fill(0)
console.log(ochoValores);

console.log(arr);
const arreg=[1,2,3]
console.log(arreg);
arr=[
    'Maria',
    250,
    true,
    {pais: 'Bolivia'},
    {skills:['HTML','CSS','JS','React']}
]
console.log(arr);
// split
const str='JavaScript'
console.log(str.split(''));
let empresasString='Facebook, Google, Apple'
let empresasArreglo=empresasString.split(',')
console.log(empresasArreglo);
let texto='Yo estoy aprendiendo JavaScript, Me gustaria aprender tambien React'
let palabras=texto.split(' ')
console.log(palabras);

let frutas=['banana','naranja','limon']

let indice= frutas.indexOf('toronja')
if(indice===-1){
    console.log('La fruta no existe dentro de la colección de frutas');
}else{
    console.log('La fruta si existe dentro de la colección de frutas');
}
frutas[0]='manzana'
frutas[3]='manzana'
console.log(frutas);
let segundoElemento=frutas[0]
// length
let tamaño= frutas.length 

console.log(segundoElemento);
console.log(tamaño);

//concat
let arreglo1=[1,2,3]
let arreglo2=[4,5,6]
let arreglo3=arreglo1.concat(arreglo2)
console.log(arreglo3);
// indexOf
let arreglo4=[1,2,5,4,2,6,7]
console.log(arreglo4.indexOf(2));
console.log(arreglo4.lastIndexOf(2));
// includes
let arreglo5=[1,2,3,4,5,6,7]
console.log(arreglo5.includes(8));
// Array.isArray
let arreglo6=[1,2,3,4,5,6,7]
let numero=123
console.log(Array.isArray(arreglo6));
console.log(Array.isArray(numero));
//toString
let arreglo7=[1,2,3,4,5,6,7]
console.log(arreglo7.toString());
console.log(typeof arreglo7.toString());
//join
let arreglo8=[1,2,3,4,5,6,7]
console.log(arreglo8.join());
let nombres=['Maria','Juanita','Pepito']
console.log(nombres.join(''));
console.log(nombres.join(' '));
console.log(nombres.join(', '));
console.log(nombres.join('# '));
//Slice
let arreglo9=[1,2,3,4,5,6,7]
console.log(arreglo9.slice(0,3));
console.log(arreglo9);
//Splice
let arreglo10=[1,2,3,4,5,6,7]
let arreglo11=[...arreglo10]
let ArregloSplice=arreglo11.splice(2,3);
console.log(ArregloSplice);
console.log(arreglo10);
//pop
let arreglo12=[1,2,3,4,5,6,7]
let ultimo=arreglo12.pop();
let primero=arreglo12.shift();
let finalElemento=arreglo12.push(3)
let principioElemento=arreglo12.unshift(3)
console.log(arreglo12);
//!Las funciones de orden superior
let cuadrado=(n)=>{
    return n*n
} 

function cubo(callback,n) {
    return callback(n)*n
}
// console.log(cuadrado(2))
console.log(cubo(cuadrado,2)) 
// forEach
let arreglo13=[1,2,3,4,5]
arreglo13.forEach(elemento=>console.log(elemento))
let sumaArreglo=(arr)=>{
    let sum=0
    let callback= function (elemento) {
        sum+= elemento
    }
    arr.forEach(callback)
    return sum
}
console.log(sumaArreglo(arreglo13))

//SetTimeout
let saludo=()=>console.log("hola")

setTimeout(saludo,2000)

//map
let arreglo14=[1,2,3,4,5]
let cuadradosArreglo14=arreglo14.map(elemento=>elemento*elemento)
console.log(cuadradosArreglo14);
console.log(arreglo14);
let names=['Maria','Juanita','Pepito']
let names2=names.map(name=>name.toUpperCase().slice(0,3))
console.log(names2);
//filter
let arreglo15=[1,2,3,4,5]
let paresArreglo15=arreglo15.filter(elemento=>elemento%2===0)
console.log(arreglo15);
console.log(paresArreglo15)
//reduce
let arreglo16=[1,2,3,4,5]
let sum=arreglo16.reduce((sum,actual)=> sum*actual)
console.log(sum);
//every
// let arreglo17=[1,2,3,4,5]
let arreglo17=[1,2,6,4,8]
let todosPares=arreglo17.every(elemento=>elemento%2===0)

console.log(todosPares);
//find
let arreglo18=[22,2,3,4,5]
 numero=arreglo18.find(edad=>edad<20)
 console.log(numero);
 //some
 let arreglo19=[22,2,3,4,5]
 let booleanos=[false,true,false,false]
 let alguno=booleanos.some(booleano=>booleano===true)
 console.log(alguno);
 //sort
 let arreglo20=['Leche','Cafe','Mnazana']
 console.log(arreglo20.sort());
 let arreglo21=[22,2,3,4,5]
 console.log(arreglo21.sort((a,b)=> a-b));


