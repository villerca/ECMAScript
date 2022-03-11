function newFunction(name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "MX";
    console.log(name, age, country);
}

// **** es6 ****

function newFunction2(name = "oscar", age = 32, country = "MX") {
    console.log(name, age, country);
};
newFunction2();
newFunction2("Ricardo", "23", "Colombia");

let hello = "Hello";
let world = "world";
let epicPhrase = hello + "  "+ world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// antes es

let lorem = "qui consequatur. commodi. Ipsum vell duis yet minima \n"
+ "otar frase epica que necesitamos."

// Ahora con es6

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


// Destructuracion de elementos antes con version anterior es

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);
// ahora con es6

let { name, age, country} = person;
console.log( name, age, country );


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Rosa', 'Ana'];

let education = ['David', ...team1, ...team2]; // asi unimos todos los elementos 
console.log(education);

// Diferencia entre las palabras reservadas var y let

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);// aqui si funciona
}

console.log(globalVar); // Scope Global
console.log(globalLet);// da error porque solo esta definido para denytro del bloque de codigo(Scope local)

const a = "b"; // Es una constante que no va a cambiar su valor


// Objeto 

let name = "Viller";
let age = 43;
// con es5
obj = { name: name, age: age};

// con es6

obj2 = { name, age};
console.log(obj2)

// Arrow function (funciones tipos flechas); funciones anonimas

const names = [
    { name: "Viller", age: 43},
    { name: "Yali", age: 40}
]

let listOfNames = name.map(function(item) {
    console.log(item.name);
})
// diferentes formas de expresar la funcion flecha
let listOfNames2 = name.map(item => console.log(item.name));

const listOfNames3 = (name, age, country)=> {
    ..
}

const listOfNames4 name => {
    ...
}


const square = num => num * num;

// *** Las Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve ("Hey");
        } else {
            reject("Ups!!");
        }
    });
}

helloPromise()  n   
    .then(response => console.log(response))
 
    .catch(error => console.log(error));



    // ********** Clase*****

    class calculator {
        constructor() {
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator();
    console.log(calc.sum(2, 2));

    import { hello} from './module';

    hello();

    // Generator******

    function* helloWorld() {
        if (true) {
            yield "Hello, ";
        }
        if (true) {
            yield "World";
        }
    };

    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
