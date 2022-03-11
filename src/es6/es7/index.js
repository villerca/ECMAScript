// Un arreglo de numero utilizamos (.includes) para saber si hay un valor cualquiera dentro del arreglo

let numbers = [1, 2, 3, 4, 7, 8];

if (numbers.includes(5)) {
    console.log("Si se encuentra el valor 7");
} else {
    console.log("No se encuentra. ");
}

// Elevar a potencia

let base = 4;
let exponent = 5;
let result = base ** exponent;

console.log(result);