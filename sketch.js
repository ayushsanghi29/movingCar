
var fixedRect, movingRect, car;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -4

  fixedRect = createSprite(100, 400, 50, 50);
  fixedRect.shapeColor = "green";

  car = createSprite(400, 100, 50, 50);
  car.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  

  if(isTouching(movingRect, car)){
    movingRect.shapeColor = "blue";
    car.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    car.shapeColor = "green"
  }
 

bounceOff(movingRect,fixedRect)
  drawSprites();
}



