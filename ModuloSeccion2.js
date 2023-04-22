//? Operadores de cadenas: concatenación y asignación compuesta
//? Operadores de comparación
//? Otros operadores JS (typeof, instanceof, delete, y ternary)
//? Prioridad de los operadores"


//! concatenacion => unir dos cadenas "maria" + "paola"="maria paola"
console.log('2'+true) //'2' + true=// '2' + 'true' //'2true'
let nombre="Juan"
let apellido="Pérez"
let nombreCompleto= nombre+ ' ' +apellido
console.log(nombreCompleto);
//! asigacion compuesta
let saludo="Hola!"
saludo += "!"; // saludo= saludo + "!" // saludo="Hola!" +"!" //saludo="Hola!!"
console.log(saludo); // Hola!!
//! asigancion compuesta operadores de comparacion
let edad=25
console.log(edad == 25); //25==25 // true
console.log(edad != 25); //25!=25// false
console.log(edad > 25); //25> 25// false
console.log(edad < 25);//25< 25// false

//!TYPEOF , INSTANCEOF DELETE Y EL OPERADOR TERNARIO

//? typeOf
let numero=10 
let texto="Hola"
console.log(typeof numero); //Output:"number"
console.log(typeof texto);//Output:"string"

//? instanceOf 
class Persona{
  constructor(nombre,edad){
    this.nombre=nombre
    this.edad=edad
  } 
} 
class Maestro{
    constructor(nombre,edad,especialidad){
            this.nombre=nombre
            this.edad=35
            this.especialidad=especialidad
    }
}
let persona1 = new Persona("Juan",25)

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1 instanceof Persona) // true
console.log(persona1 instanceof Maestro) //false

//!DELETE
let persona2={nombre:"Gonzalo",edad:35}
console.log(persona2.nombre) //Gonzalo
delete persona2.nombre 
console.log(persona2.nombre) //undefined

//! Ternario

if (8>2) {
    console.log('Si es cierto es mayor a 2')
} else{
    console.log('No es cierto uno es mayor a dos')
}
let age=9
if(age>=18){
        console.log('si puedes votar')
}
else{
    console.log('no puedes votar')
}

let edad2= 20;
// condition ? "si" : "no" 
let mensaje =  edad2>=18 ? "Eres mayor de edad":"Eres menor de edad" //String
console.log(mensaje); 

let resultado=10+5*2 ///10 + 10=20
console.log(resultado); //20








