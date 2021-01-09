function setup(){
//To create the canvas
  createCanvas(600,600);
//To set teh angle measure mode to degrees  
  angleMode(DEGREES);
}

function draw(){
//To have the background black  
  background(0);

//To change it's position and to rotate the clock  
  translate(300,300);
  rotate(-90);
  
//To make the shourtcuts the functions  
  let hr = hour();
  let min = minute();
  let sec = second();

  strokeWeight(8);

  noFill();

//To make the circle and arc for seconds  
  stroke(255,100,150);
  let secondsAngle = map(sec,0,60,0,360);
  arc(0,0,500,500,0,secondsAngle);
  
//To make the seconds arc rotate  
  push();
  rotate(secondsAngle);
  stroke(255,100,150);
  line(0,0,150,0);
  pop();
  
//To make the circle and arc for the minutes 
  stroke(0,255,0);
  let minutesAngle = map(min,0,60,0,360);
  arc(0,0,480,480,0,minutesAngle);
  
//To make the minutes arc rotate  
  push();
  rotate(minutesAngle);
  stroke(0,255,0);
  line(0,0,100,0);
  pop();
  
//To make the circle and arc for the hours  
  stroke(0,0,255);
  let hoursAngle = map(hr % 12,0,12,0,360);
  arc(0,0,460,460,0,hoursAngle);
  
//To make the hours arc move  
  push();
  rotate(hoursAngle);
  stroke(0,0,255);
  line(0,0,75,0);
  pop();

//To make the point in the center  
  stroke(255);
  point(0,0);
  
}

//Pink - Seconds Hand
//Green - Minutes Hand
//Blue - Hours Hand