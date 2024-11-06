function greet(name, callback) {
    console.log("Hai " + name);
    callback();
}

function sayGoodbye() {
    console.log("Sampai jumpa!");
}

greet("Luna", sayGoodbye);

//=============================================//

setTimeout(() => {
    console.log("Ini muncul setelah 2 detik");
}, 2000);

//=============================================//

function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}

setInterval(setTime, 1000);
console.log("Program Finish");

//=============================================//

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol!");
        }
        console.log(a / b);
    } catch (error) {
        console.log("Terjadi kesalahan:", error.message);
    }
}

divide(10, 2);
divide(10, 0);