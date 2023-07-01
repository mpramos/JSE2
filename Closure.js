function externa() {
    let contador=0
    function interna() {
        contador++
        return contador
    }
    return interna
}
const funcionInterna=externa()
console.log(funcionInterna());
console.log(funcionInterna());
console.log(funcionInterna());
console.log(funcionInterna());

function externaFuncion() {
    let cont=0
    function incrementa(params) {
        cont++
        return cont
    }
    function disminuye(params) {
        cont--
        return cont
    }
    return {
        incrementar:incrementa(), 
        decrementar:disminuye()
    }
}
const funcionInterna2=externaFuncion()
console.log(funcionInterna2.incrementar);
console.log(funcionInterna2.decrementar);