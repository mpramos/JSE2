// Clases

class ClassName{
 // aqui viene el codigo   
}
class Persona{
//? Constructor de la clase
    constructor(nombre='Maria',edad=50,apellido='Gutierrez'){
        this.nombre=nombre
        this.edad=edad
        this.apellido=apellido
    }
    //? Metodo de la clase
    obtNomCompleto(){
        let nombreCompleto=this.nombre + ' ' + this.apellido
        return nombreCompleto
    }
}
//? Creación de instancias de clase
let persona1= new Persona('Susana',20)
let persona2= new Persona('Raul',40)
let persona3= new Persona()
console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona1.obtNomCompleto())
console.log(persona2.obtNomCompleto())
console.log(persona3.obtNomCompleto())



