// const persona = {
//     primerNombre: 'Felipe',
//     apellido: 'Gutierrez',
//     edad: 35,
//     pais: 'Bolivia',
//     genero: 'M',
//     skills: ['HTML', 'CSS', 'JS'],
//     hobbies: ['Leer', 'Escuchar', 'Jugar'],
//     contacto: {
//         telefono: '+591 2 123 456',
//         email: 'ejeyd@example.com'
//     },
//     getNombreCompleto: function () {
//         return `Nombre Completo : ${this.primerNombre} ${this.apellido}`
//     }
// }
// const persona2 = {
//     primerNombre: 'Susana',
//     apellido: 'Gutierrez',
//     edad: 30,
//     pais: 'Bolivia',
//     genero: 'M',
//     skills: ['HTML', 'CSS', 'JS'],
//     hobbies: ['Leer', 'Escuchar', 'Jugar'],
//     contacto: {
//         telefono: '+591 2 123 456',
//         email: 'ejeyd@example.com'
//     },
//     getNombreCompleto: function () {
//         return `${this.primerNombre} ${this.apellido}`
//     }
// }
// const persona3 = {
//     primerNombre: 'Juana',
//     apellido: 'Arce',
//     edad: 30,
//     pais: 'Bolivia',
//     genero: 'M',
//     skills: ['HTML', 'CSS', 'JS'],
//     hobbies: ['Leer', 'Escuchar', 'Jugar'],
//     contacto: {
//         telefono: '+591 2 123 456',
//         email: 'ejeyd@example.com'
//     },
//     getNombreCompleto: function () {
//         return `${this.primerNombre} ${this.apellido}`
//     }
// }
// console.log(persona.getNombreCompleto());

// class ClassName {

// }
//Persona => nombre, apellido
class Persona {
    constructor(nombre = 'Marisol', apellido = 'Arce') {
        this.nombre = nombre
        this.apellido = apellido
        this.nota=0
        this.skills=[]
    }
    obtenerNombreCompleto(){
        let nombreCompleto=this.nombre + ' ' + this.apellido
        return nombreCompleto
    }
    get obtenerNota(){
        return this.nota
    } 
    get obtenerSkills(){
        return this.skills
    }
    set cambiarNota(nota){
        this.nota+=nota
    }
    set cambiarSkills(skill){
        this.skills.push(skill)
    }
}

const persona1 = new Persona("Juana", "Arce") //Instancia
console.log(persona1.obtenerNombreCompleto())
console.log(persona1.obtenerNota)
console.log(persona1.obtenerSkills)
persona1.cambiarNota=1
persona1.cambiarSkills='HTML'
persona1.cambiarSkills='CSS'
persona1.cambiarSkills='JavaScript'
console.log(persona1.obtenerSkills)
console.log(persona1.obtenerNota)
const persona5 = new Persona() //Instancia
console.log(persona5.obtenerNombreCompleto());
console.log(persona5.obtenerNota)
console.log(persona5.obtenerSkills)
persona5.cambiarNota=1
persona5.cambiarSkills='React'
persona5.cambiarSkills='Node'
persona5.cambiarSkills='Express'
console.log(persona5.obtenerSkills)
console.log(persona5.obtenerNota)

class Estudiante extends Persona {
    saludaEstudiante(){
        console.log('Hola soy estudiante, hijo de la clase Persona');
    }

}
let estudiante1=new Estudiante('Juan','Ramirez')
estudiante1.saludaEstudiante()
console.log(estudiante1.obtenerNota)
estudiante1.cambiarNota=2
console.log(estudiante1.obtenerNota)