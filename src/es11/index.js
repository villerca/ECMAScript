// Dinamic import

const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});

// BigInit ********
const aBigNumber = 9007199254740991n;
const anotherBignumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBignumber);


// Trabajo con las promesa
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve1'));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));

  // GlobalThis
console.log(window);
console.log(globalThis);

// null

const fooo = null ?? "default string";
console.log(fooo);

// Opctional chainig

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log("email")
} else {
    console.log("fail");
}