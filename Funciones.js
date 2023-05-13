
function 👩🏻‍🦰('🥝') {
    console.log('🚿');
    console.log('💻');
    console.log('🍟');
    console.log('Mi primera comida es ' + '🥝');
    return 'Acabe con las tareas'
}
//
CODIGO
        👩🏻‍🦰('🥝') //String 
let repuesta = 👩🏻‍🦰()
console.log(respuesta);

//
function cuadrados() {
    let numero = 3
    let c = numero * numero
    console.log(c);
}
cuadrados()
//? SIN FUNCIONES
let temperatures;
let sum;
let meanTemp;

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
    sum = sum + temperatures[i];

}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> media: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> media: 18.083333333333332

for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> media: 18.083333333333332
let temperatures;

///? Funciones sin retorno , invocaciones
let temperaturesCH = [15, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
let sum;
let meanTemp;

function getMeanTemp(temperatures) {
    sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    console.log(meanTemp = sum / temperatures.length)
}

getMeanTemp(temperatures1)



console.log(getMeanTemp(temperatures1));

//?
temperaturesCH = [15, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24]
let temperaturesLP = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
let nombre = "maria"

function getMeanTemp(temperaturesLP) {
    let meanTemp;
    let sum = 0;
    for (let i = 0; i < temperaturesLP.length; i++) {
        sum += temperaturesLP[i];
    }
    return meanTemp = sum / temperaturesLP.length;
}

let LaPaz = getMeanTemp(temperaturesLP)
console.log(LaPaz);

let Cochabamba = getMeanTemp(temperaturesCH)
console.log(Cochabamba);




//FACTORIAL
6 != 6 * 5 * 4 * 3 * 2 * 1 //=> 720
function factorial(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        result = result *  //6*5*4*3*2
            n--; //2
    }
    return result;
}

console.log(factorial(6)); // -> 720



function contador(n) {
    if (n === 0) {
        return "termino el contador"
    } else {
        console.log(n)
        return contador(n - 1)//0
    }
}

console.log(contador(3));

6 != 6 * 5 * 4 * 3 * 2 * 1 // =>720

function factorial(n) {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(6));


function Factorial(n) {
    return n > 1 ? n * Factorial(n - 1) : 1
}
console.log(Factorial(6));

