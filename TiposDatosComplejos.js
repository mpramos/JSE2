// Datos Primitivos
// Datos Complejos
let nombres=['maria','esteban','juana',3,'😄'] //Arreglo
console.log(typeof nombres)
let usuario={
    nombre:'Marcos', //String 
    edad:30 //Number
}
//length
const number=[1,2,3,4,5,'👀','🤓'] //arreglo
console.log(number.length)
//indexOf
const frutas=['🥝','🍓','🍋','💻','🍔','📲'] //3
console.log(frutas[3])
console.log(frutas.indexOf('💻')) // frutas.indexoF(3)
//push
const fruits=['🥝','🍓','🍋']
console.log(fruits)
fruits.push('🍊')
console.log(fruits)
//unshift 
const fruistUnshift=['🥝','🍓','🍋']
console.log(fruistUnshift)
fruistUnshift.unshift('🍊')
console.log(fruistUnshift)
//pop
const fruistPop=['🥝','🍓','🍋']
console.log(fruistPop)
fruistPop.pop()
console.log(fruistPop)
//shift
const fruistShift=['🥝','🍓','🍋']
console.log(fruistShift)
fruistShift.shift()
console.log(fruistShift)
//reverse
const fruistReverse=['🥝','🍓','🍋']
console.log(fruistReverse)
fruistReverse.reverse()
console.log(fruistReverse)
//slice
const fruitsSlice=['🥝','🍓','🍋','🍊']
console.log(fruitsSlice)
const fuitsSelected=fruitsSlice.slice(1,4)
console.log(fuitsSelected)
//concat
const fruits1=['🥝','🍓','🍋','🍊']
const foods=['🍟','🍕','🌭']

const allFoods= fruits1.concat(foods)
console.log(allFoods)









