var bg ,sleep,brush,gym,eat,bath,move,astronaut;
 function setup() {
  createCanvas(800,400);
   astronaut=createSprite(400, 200, 50, 50);
   astronaut.addAnimation("sleeping",sleep);
}
function preload(){ 
  bg= loadImage("images/iss.png");
   sleep = loadAnimation("images/sleep.png"); 
   brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
     eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png"); 
     bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
      move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png"); }
function draw() {
  background(bg);  
  Edges=createEdgeSprite()
  astronaut.bounceOff(Edges)
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=350
    astronaut.x=150
    astronaut.velocityX=0.5
    astronaut.velocityY=0.5
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.x=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.velocityX=1
    astronaut.velocityY=1
  }
  drawSprites();
}