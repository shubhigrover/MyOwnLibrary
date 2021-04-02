var fixedRect, movingRect
var gameObj1, gameObj2
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400,200,100,50)
  fixedRect.velocityX=-2
  movingRect= createSprite(200,300,50,100)
  gameObj1= createSprite(100,200)
  gameObj1.velocityX=2
  gameObj2= createSprite(200, 300)
}

function draw() {
  background(0,255,255);  
  movingRect.x=mouseX
  movingRect.y=mouseY
  bounceOff(gameObj1,fixedRect)
if(isTouching(movingRect,gameObj1)){
  gameObj1.shapeColor= "red"
  movingRect.shapeColor= "red"  
}
else{
  gameObj1.shapeColor= "green"
    movingRect.shapeColor= "green"
}
  
 
  drawSprites();
}
