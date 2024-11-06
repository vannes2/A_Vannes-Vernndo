
let text = "Halo para mentor, kalau boleh tau, untuk game dan film kalian suka genre apa?"
alert(text)

const person = {A:"Vannes", B:"Varnando", C: "ini templet maaf kak udah kagak tau mau tulis apa"}
console.log (person)


let tugas =["Tugas portofolio", "koding HTML", "Buat web simpel"]
console.log (tugas)

let nah = "kalau saya gak salah inget, iniharus nya tugas ke:"
console.log (nah)

let N = 4;
console.log (N)

let nah2 = "Numbers:"
console.log (nah2)

let G = 4e9;
console.log (G)

console.log (10 < 15 && 10 > 5) //True
console.log (15 > 25 && 20 > 15) //false

console.log (!(10 < 15) && 10 > 5) //True
console.log (!(15 > 25) && 20 > 15) //false

console.log (15==25 || 20==15)// false
console.log (15==15 || 20==15)// true
console.log (25==25 || 20==20)// true



let texta = "boolean itu adalah tipe data yang hanya memiliki 2 values yaitu false and true"
let textb = "boolean itu adalah tipe data yang hanya memiliki 1 values yaitu true"
console.log (texta == textb) //false

let textc = "boolean itu adalah tipe data yang hanya memiliki 2 values yaitu false and true"
let textd = "boolean itu adalah tipe data yang hanya memiliki 2 values yaitu false and true"
console.log (textc == textd) //true


let a = 5;
let b = "5";

if (a == b) {
    console.log("a dan b sama (non-strict)");
}

if (a === b) { 
    console.log("a dan b sama (strict)");
} else {
    console.log("a dan b tidak sama (strict)");
}

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(4, 5)); // 20

let animal = "Giant pacific octopus";
function M(){
    let animal ="pajama squid";
    console.log(animal);
}
M();

function sayHello(person) {
    console.log("Hello, " + person + "!");
}

function Halo() {
    sayHello("hagrid");
    sayHello("Luna");
}

Halo();
