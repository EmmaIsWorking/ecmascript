// ---> Variables
//antes
function oldFunction(name, age, country) {
    name = name || 'Emmanuel'
    age = age || 28
    country = country || 'México'

    console.log(name, age, country)
}

//es6
function nowFunction(name = 'Emmanuel', age = 28, country = 'Mexico') {
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



// ---> Variables
function oldFunction(name, age, country) {
    name = name || 'Emmanuel'
    age = age || 28
    country = country || 'México'

    console.log(name, age, country)
}

//es6
function nowFunction(name = 'Emmanuel', age = 28, country = 'Mexico') {
    console.log(name, age, country)
}

nowFunction()
nowFunction('Lisa', 38, 'Germany')



// ---> templates literals

let hello = 'Hola'
let world = 'World'
let epicPhrase = hello + " " + world
console.log(epicPhrase)

//es6
epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)



//---> Multilinea

let dantePhrase = "¡Oh vosotros los que entráis \n" +
    "abandonad toda esperanza!"

//es6
let lutherPhrase = `"Desde muy joven decidí dar mi vida por algo eterno y absoluto.
No por los pequeños dioses que están hoy aquí y mañana se han ido, 
sino por Dios que es el mismo ayer, hoy y siempre"
`

console.log(dantePhrase)
console.log(lutherPhrase)



//---> Destructuración

let person = {
    'name': 'Emmanuel',
    'age': 28,
    'country': 'Mexico'
}

console.log(person.name, person.age, person.country)

//es6

let {
    name,
    age,
    country
} = person

console.log(name, age, country)



// --->Spread Operator

let team1 = ['Diana', 'Paola', 'Paco']
let team2 = ['Lisa', 'Judith', 'Petter']

let family = ['Angelica', 'Emmanuel', ...team1, ...team2]

console.log(family)

//LET & CONST

{

    var globalVar = "Global Var"
}

{
    let globalLet = 'Global let'
    //Solo se puede acceder dentro del codigo.
    console.log(globalLet)

}

console.log(globalVar)

const a = 'b'
a = 'a'
//ERROR

// ---> Propiedad de objetos mejorada

let name = 'Emmanuel'
let age = 28

obj1 = {
    name: name,
    age: age
}

// SE6
obj2 = {
    name,
    age
}

console.log(obj2)


//Arrow Function

const names = [{
        name: 'Emmanuel',
        age: 28
    },
    {
        name: 'Lisa',
        age: 38
    }
]

let listOfName = names.map(function (item) {
    console.log(item.age)
})

// ES6

let listOfName2 = names.map(item => console.log(item.name))

let listOfName3 = names.map((person) => {
    console.log(person.name)
    console.log(person.age)
})


const square = num => num * num


// ---> Promesas


const ejPromesa = () => {

    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Resuelve la promesa')
        } else {
            reject('Rechaza la promesa')
        }
    })
}


ejPromesa()
    .then(result => console.log('Se cumplio la promesa'))
    .then(() => console.log('Otro then más'))
    .catch(error => console.log('Error'))


class calculator{
    constructor(valueA, valueB){
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueA = valueB

        return this.valueA + this.valueB
    }
}