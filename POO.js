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
console.log(persona.getNombreCompleto());
