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
    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

}
function setup() {

}

function runMatrix() {

}

window.onload = function() {
    initCanvas();
    setup();
    runMatrix();
}