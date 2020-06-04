var feel
var like


function setup() {
  createCanvas(1200,400);
  feel = createSprite(400, 200, 50, 50);
  like = createSprite(100,200,50,50)
  feel.shapeColor = '#b54107'
  like.shapeColor = '#b54107'
}

function draw() {
  background(0,176,216);
  like.x = mouseX
  like.y = mouseY  

  if(like.x - feel.x < like.width/2 + feel.width/2  && feel.x - like.x < like.width/2 + feel.width/2
    && like.y - feel.y < like.height/2 + feel.height/2 && feel.y - like.y < like.height/2 + feel.height/2){

    feel.shapeColor = 'yellow'
    like.shapeColor = 'yellow'

  }
else {

  feel.shapeColor = '#b54107'
  like.shapeColor = '#b54107'

}
  drawSprites();
}