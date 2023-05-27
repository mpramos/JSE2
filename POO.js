const persona={
    primerNombre:'Felipe',
    apellido:'Gutierrez',
    edad:35,
    pais:'Bolivia',
    genero:'M',
    skills:['HTML','CSS','JS'],
    hobbies:['Leer','Escuchar','Jugar'],
    contacto:{
        telefono:'+591 2 123 456',
        email:'ejeyd@example.com'
    },
    getNombreCompleto: function() {
        return `Nombre Completo : ${this.primerNombre} ${this.apellido}`
    }
}
const persona2={
    primerNombre:'Susana',
    apellido:'Gutierrez',
    edad:30,
    pais:'Bolivia',
    genero:'M',
    skills:['HTML','CSS','JS'],
    hobbies:['Leer','Escuchar','Jugar'],
    contacto:{
        telefono:'+591 2 123 456',
        email:'ejeyd@example.com'
    },
    getNombreCompleto: function() {
        return `${this.primerNombre} ${this.apellido}`
    }
}
const persona3={
    primerNombre:'Juana',
    apellido:'Arce',
    edad:30,
    pais:'Bolivia',
    genero:'M',
    skills:['HTML','CSS','JS'],
    hobbies:['Leer','Escuchar','Jugar'],
    contacto:{
        telefono:'+591 2 123 456',
        email:'ejeyd@example.com'
    },
    getNombreCompleto: function() {
        return `${this.primerNombre} ${this.apellido}`
    }
}
console.log(persona.getNombreCompleto());

class ClassName{
    
}
//Persona => nombre, apellido
class Persona{
    constructor(nombre='Marisol',apellido='Arce'){
        this.nombre=nombre
        this.apellido=apellido
    }
}

const persona5= new Persona() //Instancia
console.log(persona5);
const persona1= new Persona("Juana","Arce") //Instancia
console.log(persona1);
const persona22= new Persona("Juana","Arce") //Instancia
const persona3= new Persona("Juana","Arce") //Instancia
const persona4= new Persona("Juana","Arce") //Instancia
