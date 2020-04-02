// ---> Entries (objetos->matrices)
const team = {
    frontend: 'Emmanuel',
    backend: 'Cesar',
    design: 'Diana'
}

const matriz = Object.entries(team)

console.log(team)
console.log(matriz.length)

// ---> Object value(valores de un objeto a un arreglo)

const data = {
    frontend: 'Emmanuel',
    backend: 'Cesar',
    design: 'Diana',
}


const values = Object.values(data)
console.log(values);
console.log(values.length);


// --->padStart & padEnd

const msn = 'Feliz'

console.log(msn.padStart(11, 'Estoy '));

console.log(msn.padEnd(11, ' estoy'))


// --->await

const promesaEjemplo = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout (() => resolve('aceptado'), 3000)
            : reject(new Error('error'))
    })
}

const promesaAsync = async () => {
    const promesa = await promesaEjemplo()
    console.log(promesa);
} 

promesaAsync()

// --->Trycatch

const promesaAsync2 = async () =>{
    try {
        const promesa = await promesaEjemplo()
        console.log(promesa);
        
    } catch (error) {
        console.log(error);
        
    }
}

promesaAsync2()