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
    background(1, 5, 61);

    noStroke();
    starCount = 0;
}

// drawName() function is called repeatedly, it's the main animation loop
function draw() {
    textSize(20);
    while (starCount < 100){
    for (s=0; s<15; s++) {
        const e = fill(227, 209, random(31));
        text("star", 9 * (s * random(50)), s * random(10));
        starCount++;
    }
    }

    textSize(30);
    for (var x=0; x < 25; x++){
        for (var i=11; i < 30; i++) {
            fill(random(66), random(110), 245);
            text("water", i * 5 * x, i*20);
        }
    }

}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}