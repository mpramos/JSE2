const arr= Array() 
console.log(arr);

let ochoElementos=Array(8).fill('🎈')
console.log(ochoElementos);

const arr1=[]
console.log(arr1);

let cajon1='🎃'


let cocina=['🍊','🍓','🍕','🍠']

let baño=['🚿','😷']

let escritorio=['💻','📲']

let fiesta =['🍊','🍓','🍕','🍠','🚿','😷','💻','📲'] //'String'

let fiesta2 =['🍊','🍓','🍕',['🚿','😷'],['🍊','🍓','🍕','🍠'],1,2,3,true,false]
console.log(fiesta2);
console.log(fiesta);

console.log(sillas.length);
console.log(sillas[0]);//2
let sillas= ['👨','🎊','😷']//3
for (let posicion = 0; posicion <= sillas.length-1; posicion++) { //4
    console.log(sillas[posicion]);
}

let cocina1=['🍊','🍓','🍕','🍠','🍊','🍓','🍕','🍠','🍊','🍓','🍕','🍕'] 
console.log(cocina1);
cocina1[2]='🍋'
console.log(cocina1);
console.log(cocina1[3]);
//POSICION 3
// TAMAÑO 4
console.log(cocina1.length)
let ultimaPosicion=cocina1.length-1
console.log(ultimaPosicion)
console.log(cocina1[ultimaPosicion]);

let comidaChatarra=['🍕','🍟','🍕','🍕','🍟','🍕','🍕','🍟','🍔','🍕','🥩','🥝','🥩']

let comidaSaludable=['🍋','🍓','🥝']

let cocina3=comidaChatarra.concat(comidaSaludable)
console.log(cocina3);
console.log(comidaChatarra.indexOf('🍔'));

console.log(comidaChatarra.indexOf('🥩'));
if (comidaChatarra.indexOf('🥩')===-1) {
    console.log(`El elemento 🥩  no esta dentro de mi coleccion`);
}else{
    console.log(`El elemento 🥩  esta dentro de mi coleccion`);
}
//TODO indice está guardando la posicion del filete
let indice=comidaChatarra.indexOf('🥩')
console.log(indice);

indice === -1 ? console.log('El elemento 🥩  no esta dentro de mi coleccion ?'):console.log(`El elemento 🥩  esta dentro de mi coleccion ?`);

let dispositivos=['💻','📲','🧮','👨🏻‍💻','🧮']

let primeraPosicionElemento= dispositivos.indexOf('🍟')
console.log(primeraPosicionElemento);
let ultimaPosicionElemento= dispositivos.lastIndexOf('🍟')
console.log(ultimaPosicionElemento);
primeraPosicionElemento ===-1 ? console.log('no existe'):console.log('si existe');
ultimaPosicionElemento ===-1 ? console.log('no existe'):console.log('si existe');
console.log(dispositivos.includes('🍟')) // false
console.log(dispositivos.includes('💻')) // false

let frutas=['🍓','🍋','🍊']
console.log(Array.isArray(frutas));
let frutas1= 100
console.log(Array.isArray(frutas1));

// toString
const numeros=[1,2,3,4,5]
console.log(numeros);
console.log(numeros.toString());

let nombres =['maria','paola','julia','susana']
console.log(nombres);
console.log(nombres.toString()); //cadena
console.log(nombres.join(''));
console.log(nombres.join(' '));
console.log(nombres.join(', '));
console.log(nombres.join(' 👩🏻 '));

// Metodos mas usados de una arreglo

let personas=['👩🏻','👧🏻','🧒🏻','👨🏻']
console.log(personas); //
personas.push('👨🏻‍🦱')
personas.push('👨🏻‍🦰')
console.log(personas);
personas.pop()
console.log(personas);
personas.pop()
console.log(personas);
personas.shift()
console.log(personas);
personas.shift()
console.log(personas);
personas.unshift('👸🏻')
console.log(personas);
personas.reverse()
console.log(personas);

let primerosNumeros=[1,2,3]
let segundosNumeros=[1,4,9]

let arregloDeArreglos= [[1,2,3],[1,4,9]] // 2 arreglo elementos
console.log(arregloDeArreglos[0]);
console.log(arregloDeArreglos[1]);

for (const fruta of frutas) {
    console.log(fruta)
}
let frutas=['🥝','🍓','🍊','🍟']

for (const fruta in frutas) {
  console.log(fruta)
}
let usuarios=[{nombre:'usuario1',edad:30},{nombre:'usuario2',edad:30},{nombre:'usuario3',edad:30}]

let usuario={nombre:'usuario1',edad:30}

for (const propiedad in usuario) {
    console.log(propiedad );
}


//! for VS forEach
let frutas=['🥝','🍓','🍊','🍟']
frutas.forEach(element => {
    console.log(element);
});
for (let index = 0; index < frutas.length; index+=2) {
    const element = frutas[index];
    console.log(element);
}













































