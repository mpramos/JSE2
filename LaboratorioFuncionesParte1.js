let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}]; //3 //2
// showContact: la función debe tomar dos argumentos; el primero es la lista de contactos y el segundo es el número de índice del contacto a mostrar; dentro de la función, verifica si se pasan los argumentos correctos, es decir, si los contactos son un arreglo (utiliza la construcción instanceofArray para esto).

function showContact(contacts,index) {
    if(contacts instanceof Array && index>=0 && index < contacts.length){
            console.log(contacts[index]);
    } else{
        console.log("Los argumentos pasados no son validos");
    }
}
showContact(contacts,-1)
// showAllContacts: la función debe tomar un argumento, la lista de contactos; dentro de la función, verifica si el argumento dado es un arreglo.


function showAllContacts(contacts) {
    if(contacts instanceof Array){
        contacts.forEach(element => {
            console.log(element);
        });
    }else{
        console.log("El argumento pasado no es un arreglo");
    }
}
showAllContacts(contacts)
// addNewContact: la función debe tomar cuatro argumentos, una lista de contactos y los datos del nuevo contacto, es decir: nombre, teléfono y número; antes de agregar un nuevo contacto, verifica si el argumento pasado es un arreglo y si los datos del nuevo contacto tienen algún valor.

function addNewContact(contacts,nombre,telefono,correo) {
    if (contacts instanceof Array && nombre && telefono && correo ) {
        // let newContact={name:nombre,phone:telefono,email:correo}
        // contacts.push(newContact)
        contacts.push({name:nombre,phone:telefono,email:correo})
        console.log("Nuevo contacto agregado correctamente");
    }else{
        console.log("Los argumentos pasados no son validos");
    }
}
addNewContact(contacts,"Alejandra","(0191) 719 6495","Alejandra.@nonummyac.co.uk")