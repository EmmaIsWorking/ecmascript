// ---> Operador de reposo

const obj= {
     name : 'Emmanuel',
     age : 28,
     country: 'Mexico',
}

let {name, ...all } = obj

console.log(name, all)

const obj1= {
    name: 'Emmanuel',
}

const obj2 =  {
    ...obj1,
    age: 28,
    country: 'Mexico',
}

console.log(obj2)

// --->Promise.finally

const promeseFinally = () => {
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=> console.log('Hola Mundo'),3000)
            : reject(new Error('Error'))
    })
}

promeseFinally()
    .then(resolve => console.log('resolve'))
    .catch(error => console.log('error'))
    .finally(() => console.log('Finalizo'))


    // ---> Regect -exec

    const regectData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const fecha = regectData.exec('2020-04-02')

    const year = fecha[1]
    const month = fecha[2]
    const day = fecha[3]

    console.log(year, month, day)
    console.log(fecha);
    
