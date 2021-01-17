
var movingSprite, fixedSprite

function setup() {
  createCanvas(800,400);
  movingSprite = createSprite(600, 200, 50, 50);
  fixedSprite = createSprite(400, 200, 50, 50);

  movingSprite.velocityX = -5
  fixedSprite.velocityX = 5

}

function draw() {
  background(0); 
  
 
/*movingSprite.x = mouseX;
movingSprite.y = mouseY;*/




  if(istouching(movingSprite,fixedSprite)){
    mixedSprite.shapeColour = "red"
    fixedSprite.shapeColour = "red"
  }
  else{

    mixedSprite.shapeColour = "orange"
    fixedSprite.shapeColour = "orange"
  }

  
  bounceOff(movingSprite,fixedSprite);
  drawSprites();

}




