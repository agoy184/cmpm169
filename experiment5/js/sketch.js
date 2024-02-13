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

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
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
    img = loadImage('img/sprink.jpeg');
    bg = loadImage('img/sprinkLayer.jpeg');
  
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(2);
    image(bg, -595, -450);
    normalMaterial();
    for (let f=-500; f<500; f+=120) {
    for (let i=-500; i<500; i+=105) {
    push();
    translate(i, f, 0);  
    rotateZ(frameCount * 0.0001 * f);
    rotateX(frameCount * 0.0001 * i);
    rotateY(frameCount * 0.0000001 * f * i);
    texture(img);
    torus(30, 20);
    pop();
    }
    }
  
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}