function printHeart(){
    console.log("<3")
}

//=====================================//

function multiply(x, y){
    return x * y;
}
console.log (multiply(2,3)) // 6
console.log (multiply(9,9)) // 81
console.log (multiply(5,4)) // 20

//=====================================//

let animal = "Giant Pacific Octopus";
function observe(){
let animal = "Pajama Squid";
console.log(animal);
}

observe();
//====================================//
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
let deadlyAnimal = "Scorpionfish";
console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal)

//===================================//

const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));