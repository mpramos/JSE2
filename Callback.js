const doSomething = callback=>{
    setTimeout(() => {
        const skills=['HTML','CSS','JS']
        callback('Hacer alguna cosa',skills)
    }, 2000);
}
const callback= (err,result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
}
doSomething(callback)

// Promesas
const promise = new Promise((resolve, reject)=>{
    resolve('satisfactorio')
    reject('falló')
})

const doPromise= new Promise((resolve,reject)=>{
    setTimeout(
        ()=>{
            // const skills=['HTML','CSS','JS']
            const skills=b
            if(skills.length>0){
                    resolve(skills)
            } else{
                reject('No tenemos elementos en el arreglo de los skills')
            }
        }
        ,2000)
})
doPromise
.then(results=>{console.log(results);})
.catch(err=>console.log(err))
console.log("llega acá")

const url='https://rickandmortyapi.com/api/character'
fetch(url)
.then(response=>response.json())
.then(data=>{console.log(data)})
.catch(err=>{console.log(err);})
