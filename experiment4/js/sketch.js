// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
let song;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}
function preload(){
    img1 = loadImage("img/Twindow.png")
    img2 = loadImage("img/music1.png")
    img3 = loadImage("img/music2.png")
    lol = loadImage("img/lol.gif")
    bob = loadImage("img/bob.gif")
    song = loadSound('mus/sixPM.mp3');

}
  
// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;

    capture = createCapture(VIDEO);
    capture.size(320, 240);
  
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {

    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        background(255, 0, 0);
        bob.play();
        lol.play();
    } else {
        background(0, 255, 0);
        bob.pause();
        lol.pause();
    }    
    image(capture, canvasContainer.width()/2 - 300, 50, 300, 240);
    filter(THRESHOLD)
    image(capture, canvasContainer.width()/2, 50, 320, 240);
    filter(INVERT);
    image(capture, canvasContainer.width()/2 - 320, canvasContainer.height()/2, 320, 240);
    filter(GRAY);
    image(capture, canvasContainer.width()/2, canvasContainer.height()/2, 320, 240);
    image(img1, 250, -30, 800, 650);
    image(img2, 0, 30, 300, 109);
    image(img3, 990, 30, 370, 109);
    image(lol, 990, 190, 300, 310);
    image(bob, 20, 150, 250, 310);
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    if (song.isPlaying()) {
        song.stop();
    } else {
        song.play();
    }    
}