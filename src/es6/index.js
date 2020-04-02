
// ---> Variables
//antes
function oldFunction(name, age, country) {
    name = name || 'Emmanuel'
    age = age || 28
    country = country || 'México'
    
    console.log(name, age, country)
}

//es6
function nowFunction(name='Emmanuel', age=28, country='Mexico'){
    console.log(name, age, country)
}

nowFunction()
nowFunction('Lisa', 38, 'Germany')

// ---> templates literals
//antes
let hello = 'Hola'
let world = 'World'
let epicPhrase = hello + " " + world
console.log(epicPhrase)

//es6
epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)


