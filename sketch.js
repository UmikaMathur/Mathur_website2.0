//To record circle information and sound
xNotes = [];
yNotes = [];
radiusNotes = [];
fire = new Howl({ src: ['images/BURNING_DEBRIS_1.mp3']}) 
soundNotStarted = true;


function setup() {
// naming the canvas to do other things with it later
	var canvas = createCanvas(1600, 700);
//put this canvas in a specific spot	
	canvas.parent('sketch-holder');
}


function draw() {
   background(75);
//If the circle reaches a certain point, then stop growing
  if (radiusNotes[0] > 800) {
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
	if soundNotStarted {
		soundNotStarted = false;
		fire.play();
	   }
	append(xNotes, mouseX);
	append(yNotes, mouseY);
	append(radiusNotes, 1);
}
