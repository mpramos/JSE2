const persona={
    nombre:'Juana',
    apellido:'Perez',
    edad:50,
    ciudad:'Cochabamba',
    profesion:'Programadora',
    tecnologias:[
        'HTML','CSS','JavaScript','React','Node','MongoDB','Python'
    ],
    casada:true,
    obtenerNombreCompleto: function () {
        return `${this.nombre} ${this.apellido}`
    }
}
console.log(persona);
// console.log(persona.casada)
// console.log(persona.obtenerNombreCompleto());
persona.telefono='777777'
console.log(persona);
//! Métodos de objetos
//? Object.assing
let persona={
    nombre:'Juana',
    apellido:'Perez',
    edad:50,
    ciudad:'Cochabamba',
    profesion:'Programadora',
    tecnologias:[
        'HTML','CSS','JavaScript','React','Node','MongoDB','Python'
    ],
    casada:true,
    obtenerNombreCompleto: function () {
        return `${this.nombre} ${this.apellido}`
    }
}
let copiaPersona= Object.assign(persona)
console.log(copiaPersona);
//? Object.keys 
const keys=Object.keys(copiaPersona)
console.log(keys);
//? Object.values
const values=Object.values(copiaPersona) 
console.log(values);
//? Object.entries
const entries=Object.entries(copiaPersona)
console.log(entries);

