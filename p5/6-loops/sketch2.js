function setup() {
    createCanvas(800,300);
}

var r = 0;
var b = 0;
var g = 0;
var totalRect = 255;

function draw() {    
    for(var i = 0; i <= totalRect; i++) {
        fill(r,b,g);
        rect(width/2, height/2, 100,100);
        r++;
        b++;
        g++;

        console.log(r);
        console.log(b);
        console.log(g);
    }
}