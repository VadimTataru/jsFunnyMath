const alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|:;/?<>';
var canvas;
var context;
var hor_size = 20;
var columnCount;

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
    columnCount = canvasW / hor_size;
}

//Intro output region
function printChar(text, hor_pos, vert_pos) {
    context.font = "24px Arial"
    context.fillStyle = "#7bff8d";
    context.fillText(text, hor_pos, vert_pos);    
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
    await timeout(5000);
    clear();
}
//Intro output end region

//Colums output region
function generateColumn(numChars) {
    var chars = [];
    for (var i = 0; i < numChars; i++) {
        chars.push(alphabet[rand(alphabet.length)]);
    }
    return chars;
}

function runMatrix() {
    var column = generateColumn(10);
    console.log(column);
}
//Colums output end region
window.onload = async function() {
    initCanvas();
    await timeout(2000);
    await run();
    runMatrix();
    //window.setInterval(runMatrix.bind(context), 30);
}
