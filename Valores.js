
//! Valores truthy y falsy
console.log(typeof true);
console.log(typeof false); //booleano

//! Valores falsy en JavaScript
//? 0 : El numero cero es considerado falsy
//? NaN: Not a Number es considerado falsy
//? undefined: Una variable que que se ha definido pero no hemos
//? asignado un valor
//? null: Es considerado falsy
//? false: El booleano false es considerado falsy
//? "": una cadena de texto vacía es considerada falsy

//! Valores truthy en JavaScript

// Strings no vacios 
// Numeros diferentes de cero
// Booleanos true
//Arreglos no vacios
// Objetos no vacios
// Funciones definidas


//? 1 Valores falsy
let myVariable; //falsy
if(myVariable){
    console.log('Es truthy');
}else{
    console.log('Es falsy');
}
//? 2 Valores truthy
let myVariable1="Hola"; // truthly
if(myVariable1){
    console.log('Es truthy');
}else{
    console.log('Es falsy');
}
//? 3 Valores falsy y truthly

let miVariable1="hola";
let miVariable2=0;
if(miVariable1 && miVariable2){
    console.log('Ambas son truthys');
} else if(miVariable1 || miVariable2){
    console.log("Al menos una variables es truthy");
} else{
    console.log("Ambas variables son falsy");
}
//? 4 Valores falsy y truthly

let falsyValues=[false,0,null, undefined,NaN] 

falsyValues.forEach(value=>{
    if (value) {
        console.log(`${value} es truthy`)
    } else {
        console.log(`${value} es falsy`)
    }
})

//? 5 Valores falsy y truthly

let truthyValues=[true,1,-1,0.5,"0","false",[],{},()=>{}]
truthyValues.forEach(value=>{
    if (value) {
        console.log(`${value} es truthy`)
    }else{
        console.log(`${value} es falsy`)
    }
})
let nombre="maria"  
console.log(''+' '+'nombre' + nombre);
console.log(`El nombre es ${nombre}  `);
// value=true

// true===true // true es truthy

//value=1
// 1===true // 1 es truthy

//value=-1
// -1===true // -1 es truthy


//! Operadores lógicos && and (Y)
//* Evaluar a true si ambos operando son truthy 
//* Evaluar a false si uno o ambos operando son falsy

console.log( 5 && "hello" ); //hello
console.log( 0 && "hello" ); //0

//! Operadores lógicos || or (O)
console.log( 5 || "hello" ); //5
console.log( 0 || "hello" );//hello
console.log( "hello" || 0 );

//! Operadores lógicos ! (negacion)
console.log( !5 ); //false
console.log( !true ); //false
console.log( !false ); //true

//? Ejercicio 6
console.log(0 && 5);
console.log(7 && 5);
console.log("" || "hello");
console.log(false || null);

//? Ejercicio 7
let valor="falseee"

console.log( false|| valor);

//

console.log('123'==123); //123 = '123'
console.log('123'=== 123);

//? 
let numero="1"
let x =(numero===1)
let y =(numero==1)
let z =(numero=1)
console.log(x);
console.log(y);
console.log(z);

//?
let str="12"

str=+str
console.log(typeof str);

let cont =0
//cont=cont+1 //cont= 0 +1//cont=1
cont+=1
console.log(cont);

//?
console.log(!(true && false || true )); // false


 
console.log(3*2>20-15);


//

let contador=0
console.log(contador++);//0
console.log(contador);//1

let contador1=0
console.log(++contador1);//1
console.log(contador1);//1

let n=10
let m=++n
console.log(m);
console.log(n);
n:11
m:11





