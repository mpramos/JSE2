/* Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:

- estación inicial (el nombre clave es 'from', y como valor, proporciona el nombre de la estación más cercana en tu área)
- estación final (el nombre clave es 'to', y como valor, dar cualquier otra estación dentro de 100 km)
- el precio del boleto (el nombre clave es 'price', y como valor, proporciona la cantidad que te gustaría pagar por este boleto)

El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente. Luego muestra los valores de todos los campos del ticket en la consola.

Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos `firstName` y `lastName` al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la consola en JavaScript */
//TODO

// Crear un objeto de boleto de tren
let ticket={
    from:'Estación GGG',
    to:'Otra estacion dentro de 100 km',
    price:50.00 
}
//Mostar los valores de todos los campos del boleto en la consola
console.log(ticket.from)
console.log(ticket.to)
console.log(ticket.price)

// Crear un objeto vacio que se llama person
let person={

}
//Usando la notacion del punto tengo que agregar campos firstName y lastName
person.firstName='Juan'
person.lastName='Perez'
console.log(person.firstName);
console.log(person.lastName);