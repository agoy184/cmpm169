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
    timer = 0;
    stroke(5);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    if (millis() >= 900+timer) {
        background(mouseX,mouseY,mouseX);
        timer = millis();
        fill(mouseX,mouseY,mouseX);
        box(timer%900, timer%900, 25)
        print(timer)
      }  
      box(mouseX, mouseY, 25);
      box(mouseX*1.5, mouseY/2, 25);
      box(mouseY*1.7, mouseY/3, 25);
      box(25, 25, mouseX*5)
      circle(height/2, 0, mouseX);
      circle(-height/2, 0, mouseX);
    }

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}