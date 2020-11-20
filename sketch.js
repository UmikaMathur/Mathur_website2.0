//To record circle information 
xNotes = [];
yNotes = [];
radiusNotes = [];


function setup() {
	createCanvas(400, 400);
}


function draw() {
   background(0);
//If the circle reaches a certain point, then stop growing
  if (radiusNotes[0] > 400) {
		xNotes.shift();
		yNotes.shift();
		radiusNotes.shift();
	}
//Increase the recorded radius for every circle by 1. 
    for (let i=0; i<xNotes.length;i++) {
	radiusNotes[i] = radiusNotes[i] + 1;
}

//draw all previously noted circles
    for (let i = 0; i < xNotes.length; i++) {
//color of circle
      c = color('#ff0000');
      fill(c);
	circle(xNotes[i], yNotes[i], radiusNotes[i]);
  }
}


// When the mouse is pressed, make a note of where the circle will be, and give it a radius of 1.
function mousePressed() {
	append(xNotes, mouseX);
	append(yNotes, mouseY);
	append(radiusNotes, 1);
}
