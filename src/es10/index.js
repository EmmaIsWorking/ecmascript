// --->flat

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log(array.lat())

// ---> flatmap
let array2 = [1,2,3]
console.log(array2.flatMap(value => [value, value * 2]))

// --->trimstart

let cadena = '       Hallo'
console.log(cadena);
console.log(cadena.trimStart())


// ---> trimEnd
let cadena2 = 'Hallo           '
console.log(cadena2);
console.log(cadena2.trimEnd())


//nuevo trycatch. Se elemino el parametro (error)

try {
    
} catch  {
    error
}

let entries = [["name", "Emmanuel"],["age", 28]]

//en el ejercicio el metodo fromEntries

console.log(Object.entries(entries))


// --->Symbol

let mySimbol = 'Me gustan las galletas'
let simbol = Symbol(mySimbol)

//No me funciono en VSC 
console.log(simbol.description);



