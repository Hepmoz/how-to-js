var circle;


function setup() {
    createCanvas(800,300);

    //Objetc Initializer
    // circle = {
    //     x: width/2,
    //     y: height/2,
    //     size: 50,
    //     draw: function() {
    //         ellipse(this.x,this.y,this.size,this.size);
    //     },
    //     grow: function() {
    //         if(this.size < 200) {
    //             this.size += 1;
    //         }
    //     }
    // };

    //Object Constructor
    circle = new Circle();
}   

function draw() {
    background(220);

    //circle propierties
    fill(237,34,93);
    noStroke();

    circle.draw();
    circle.grow();
    
    
    
}

//Object Constructor
var Circle = function() {
    this.x = width/2;
    this.y = height/2;
    this.size = 50;

    this.draw = function() {
        ellipse(this.x, this.y, this.size, this.size);
    };

    this.grow = function() {
        if(this.size < 200) {
            this.size += 1;
        }
    };
};