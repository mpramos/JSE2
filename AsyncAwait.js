
async function fetchData() {
    try{
        const respuesta= await fetch('https://rickandmortyapi.com/api/character')
        const data = await respuesta.json()
        console.log(data);
    } catch(error){
        console.log('Error: ',error);
    }
}
fetchData()


function fetchData1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const satisfactorio= Math.random()< 0.5
            if(satisfactorio){
                resolve('Datos obtenidos correctamente')
            }else{
                reject('Error al obtener datos')
            }
        },1000)
    })
}

async function fetchData1Handle() {
    try {
        console.log('Obteniendo datos ....');
        const data=await fetchData1()
        console.log('Dtos: ', data);
    } catch (error) {
        console.log('Error', error);
    }
}
fetchData1Handle()