
let cadena1='árbol'
let cadena2='árzuela'
let comparacion= cadena1.localeCompare(cadena2,'es')
if (comparacion <0) {
    console.log(`${cadena1} está antes que ${cadena2} en orden alfabetico`);
} else if(comparacion>0){
    console.log(`${cadena1} está después que ${cadena2} en orden alfabetico`);
}else{
    console.log(`${cadena1} y ${cadena2} son iguales`);
}
const frutas=['Manzana','Banana','Cereza','Durazno']
frutas.sort((a,b)=>a.localeCompare(b))
console.log(frutas);

const personas=[
    {nombre:'Juan',edad:25},
    {nombre:'Pedro',edad:30},
    {nombre:'Adela',edad:20},
]
personas.sort((a,b)=>a.nombre.localeCompare(b.nombre))
console.log(personas);