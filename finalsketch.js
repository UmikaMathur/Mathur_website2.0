let myArray = [];
let backgroundColor = [];


colors = ['red', 'orange', 'yellow', 'green', 'blue' ,'indigo', 'violet'];
first_color_index = 0;
second_color_index = 1;
C1 = colors[first_color_index]
C2 = colors[second_color_index]
X = 100 //This number represents the amount of C1 we want to add

function setup() {
  createCanvas(600, 600);
  backgroundColor = color(296, 42, 49)
  background(backgroundColor);

  strokeWeight(5);

}

function draw() {
	color_1 = lerpColor(color(C1), color(C2),(100-X)/100);
	background(color_1); //Red
	X = X - 1;
    if (X < 0) {
	  first_color_index = first_color_index + 1;
	  second_color_index = second_color_index + 1;
		X = 100;
        if (first_color_index == 7) {
            first_color_index = 0;
        }
        if (second_color_index = 7) {
        second_color_index = 0;
        }
		C1 = colors[first_color_index];
		C2 = colors[second_color_index];
	}


  if (mouseIsPressed){
    //background(0);
    //backgroundColor -= 5;
    //background(backgroundColor);


    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    myArray.push([mouseX, mouseY]);
    myArray.push([pmouseX, pmouseY]);
    beginShape();
   // print(myArray);
    for(let i = 0; i < myArray.length - 1; i++){
   // print(myArray[0]);
   // print (myArray[0][0]);
      x1 = myArray[i][0]
      y1 = myArray[i][1]
      x2 = myArray[i + 1][0]
      y2 = myArray[i + 1][1]
      line(x1, y1, x2, y2);
      line(width - myArray[i][0], height - myArray[i][1], width - myArray[i + 1][0], height - myArray[i + 1][1]);
   //   console.log(i);
    }
    endShape();
  }
}

function keyTyped(){
  console.log(`key ${key} is being typed`)
  console.log(`key ${key} is being typed`)
  if (key === 's'){

//save this image
  saveCanvas('fileName', 'png');
}
  else if (key === 'd'){
  //display image
  background(296, 42, 49);

  beginShape();
  for(let i = 0; i < myArray.length; i++){
    line(myArray[i][0], myArray[i][1], myArray[i + 1][0], myArray[i + 1][1]);
    console.log(i);
  }
  endShape();

}

  return false;
}

function mousePressed() {
  console.log("mouse pressed function");
  myArray = [];
  console.log(myArray)
  //backgroundColor = 255;
}
