const alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|:;/?<>';
var canvas;

function randColumn(max) {
    return Math.floor(Math.random() * max)
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

function initCanvas() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let canvasW = window.innerWidth;
    let canvasH = window.innerHeight;
    canvas.width = canvasW;
    canvas.height = canvasH;
}

function setup() {

}

function runMatrix() {

}

async function runText() {

}

window.onload = function() {
    initCanvas();
    //await runText();
    setup();
    runMatrix();
}