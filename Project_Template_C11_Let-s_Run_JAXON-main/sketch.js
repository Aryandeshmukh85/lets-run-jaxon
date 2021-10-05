var runnerImg, pathImg, path, runner, left_boundary, right_boundary, coin, coinImg, coinscore;
function preload(){ 
  runnerImg=loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400); 
  runner=createSprite(180,340,30,30);
  runner.scale=0.08
  runner.addAnimation("running",runnerImg);


  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  left_boundary=createSprite(0,0,100,800);
  right_boundary=createSprite(410,0,100,800);
 left_boundary.visible=false;
 right_boundary.visible=false;
}

function draw() {
  background(0);
  
  path.velocityY=5;
  runner.velocityY=5;
  runner.x=World.mouseX;

  edges=createEdgeSprites();
runner.collide(left_boundary);
runner.collide(right_boundary);  
  runner.collide(edges[3]);

  if(path.y>400){
    path.y=height/2
  }
drawSprites();
}

