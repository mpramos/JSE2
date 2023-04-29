let num=0
if(num>0){
    console.log(`${num} es positivo`)
}else if(num<0){
    console.log(`${num} es negativo`)
}else{
    console.log(`${num} es cero`)
}


let estaLloviendo=true;
if (estaLloviendo) {
    console.log('tu necesitas llevar un paraguas');
}else{
    console.log('tu no necesitas llevar un paraguas');
}

let estacion= 'random'
if(estacion==='invierno'){
    console.log('Tu necesitas abrigarte')
} else if(estacion==='otoño'){
    console.log('Tu necesitas una chaqueta')
} else if(estacion==='verano'){
    console.log('Tu necesitas un sombrero')
} else if(estacion==='primavera'){
    console.log('Tu necesitas salir al campo');
}
else{ console.log('la informacion otorgada es incorrecta');}

let clima='lluvioso'

switch (clima) {
    case 'lluvioso':
        console.log('Esta lluvioso')
        break;
    case 'nublado':
        console.log('Esta nublado');
    break
        case 'soleado':
        console.log('Esta soleando');
    break
    default:
        console.log('Este clima no es valido')
        break;
}
//!Operador ternario
let estaLluvioso=false
estaLluvioso===true
? console.log('Tu necesitas un paraguas')
: console.log('Tu no necesitas un paraguas')
