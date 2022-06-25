const alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|:;/?<>';
var canvas;
var context;
var hor_size = 20;

function rand(max) {
    return Math.floor(Math.random() * max)
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function initCanvas() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    let canvasW = window.innerWidth;
    let canvasH = window.innerHeight;
    canvas.width = canvasW;
    canvas.height = canvasH;
}

function printChar(text, hor_pos, vert_pos) {
    context.font = "24px Arial"
    context.fillStyle = "#7bff8d";
    context.fillText(text, hor_pos, vert_pos);    
}

function setup() {

}

function runMatrix() {

}

async function printText(text) {
    var textArr = text.split("")
    for (var i = 0; i < textArr.length; i++) {
        printChar(textArr[i], i * hor_size + 30, 40);
        await timeout(rand(6) ? 300 : 150);
    }
}

async function run() {
    await printText("Wake the f#ck up Samurai...")
    await timeout(5000);
    clear();

    await printText("...we have a city to burn.");
    timeout(5000);
    clear();
}

window.onload = async function() {
    initCanvas();
    await timeout(2000);
    await run();
    setup();
    runMatrix();
}

function makeid(length) {
    var result           = '';
    var charactersLength = alphabet.length;
    for ( var i = 0; i < length; i++ ) {
      result += alphabet.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
console.log(makeid(5));
