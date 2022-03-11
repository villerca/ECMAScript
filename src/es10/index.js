let array = [1, 2, 3,  [1, 2, 3,  [1, 2, 3,]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));


let hello = "       hello world";
console.log(hello);
console.log(hello.trimStart());// Con trimStart eliminamos los espacio al principio del texto 

let hello =" hello world         ";
console.log(hello);
console.log(hello.trimEnd()); // con trimEnd eliminamos espacio al final del texto

// opctional catch

try {

} cacth {
    error
}

let entries = [["name", "Oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));// Nos devuelve un objeto con los valores del arreglo

let mySymbl = `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);// Para acceder a la descripcion de un objeto tipo simbolo

