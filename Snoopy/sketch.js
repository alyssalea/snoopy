  var xpos= 250
  var ypos= 250
  var jxpos=250
  var jypos=250
  var xspeed=5
  var yspeed=5
function setup() {
  createCanvas(500,500)
  background(171,215,244)
}
function draw() {
   createCanvas(500,500)
    background(171,215,244)
     fill(1,1,1)
  //ears
  ellipse(xpos-27,ypos-10,20,60)
  ellipse(xpos+25,ypos-10,20,60)
  //head
  fill(255,255,255)
  noStroke(0)
  ellipse(xpos,ypos,50,70)
  ellipse(xpos,ypos-20,50,60)
  //eyes and nose
  fill(0,0,0)
  ellipse(xpos,ypos+20,20,10)
  ellipse(xpos+10,ypos-10,5,10)
  ellipse(xpos-10,ypos-10,5,10)
 //ears
 
 xpos+=1
 
 if(xpos > 500 - 50){
  xspeed = -5
   
 }
 if (0 > xpos + 15){
   xspeed =5
   
 }
 if (ypos > 500 -50){
   yspeed =-5
   
 }
 if (0 > ypos - 15){
   yspeed = 5
   
 }
 xpos= xpos+xspeed
 ypos= ypos+yspeed

 xpos+=1
 
 if(jxpos > 500 - 50){
  xspeed = -5
   
 }
 if (0 > jxpos + 15){
   xspeed =5
   
 }
 if (jypos > 500 -50){
   yspeed =-5
   
 }
 if (0 > jypos - 15){
   yspeed = 5
   
 }
 jxpos= jxpos+xspeed
 jypos= jypos+yspeed
 //jesus
fill(66,29,13) 
ellipse(jxpos,jypos,60,75)
fill(221,174,155)
ellipse(jxpos,jypos-6,40,40)
ellipse(jxpos,jypos+23,25,20)
fill(1,1,1)
ellipse(jxpos+10,jypos-6,10)
ellipse(jxpos-10,jypos-6,10)
stroke(1,1,1)
strokeWeight(2)
line(jxpos-6,jypos+25,jxpos+6,jypos+25)

}
function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}
