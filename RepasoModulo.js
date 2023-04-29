//Datos primitivos string , number ,.....
//Realiza la operacion 
let y=200/0
console.log(y)
//? Objetos son llamados datos complejos y tambien los arreglos
// const nombres=['maria','juana',1,2,3,[1,2,3],{...}]
let obj={
    nombre:'maria',
    telefono:77777
}
let nombre='maria' //String
//
let comidas=["🍔",/*"🥩",*/"🍠"]

comidas[2]="🍟"
console.log(comidas);
comidas.push("🍕")
console.log(comidas)
comidas.pop()
console.log(comidas)
comidas.reverse()
console.log(comidas)
let indice= comidas.indexOf("🍋")
console.log(indice);

// numeros hexadecimales
let x=0x21
console.log(x)
//
// traer la informacion de un usuario
        // quiero traer la edad del usuario
let userAge //camelCase
//
console.log(x="Alicia"+10)
//
let usuario={
    nombre:'alejandra',
    edad:28
}

usuario.edad=35
console.log(usuario)
//
let valorV="maria"
let valorV="juana"
console.log(valorV);
//

 let name ="maria"
 let height
 let age
 { //2
    { //1
        let weight=200
    console.log(weight)
     }//1
 console.log(name)
} //2

// 
let xx= 20n +10 //BigInt
console.log(xx);

//
let nombre1="maria"
//
let slice="abcdefg".slice(2,4)// (N,n-1)
console.log(slice);
//
 let numero= Number("1024555667")
 console.log(numero);
 console.log(typeof numero);

 //use strict 
let mensaje="Hola como estan"
console.log(mensaje.length)
// 
let caja1=180
{
    let caja1=200
    caja1+=10
    console.log(caja1);//210
}
console.log(caja1);

let miEdad=80 //camelCase
miEdad+=1
console.log(MiEdad);


let verdadFalso=false // Boolena
let numeroT=1 // Number


// no son mutables valores primitivos
let primitivo="soyPrimitivo"  // String
primitivo[0]="H"
console.log(primitivo);

// mutables []{}
let compuesto=["Soy","Compuesto","o","Complejo"]
console.log(compuesto);
compuesto[0]="Somos";
console.log(compuesto);





