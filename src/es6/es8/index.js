const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
}

const entries = Object.entries(data);
console.log(entries);// Nos desvuelve un arreglo con los elementos del objecto
console.log(entries.length) // Podemos saber cuantos elementos hay en el object

// Object value **** obtenemo un arreglo de estring con los valores del objeto

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// el padStar ****

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12,  "---------"));
console.log("food".padEnd(12,  "  --------"));

// Traillin comas: nos permite asignar elementos a un objecto mediantes comas

const  data = {
    front: "Ana",
    back: "Yoe"
}

// Async await

const helloWorld =()=> {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Hello World"), 3000)
        : reject(new Error("Test Error"))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld(); 
    console.log(hello);
}
helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();

