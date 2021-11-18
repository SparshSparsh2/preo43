 var space_bg;
 var spaceCraft
 var space_craft1,space_craft2,space_craft3,space_craft4;
 var iss,iss_pic;
 var hasDocked = false;


function preload(){
space_bg = loadImage("assets/spacebg.jpg");
space_craft1 = loadImage("assets/spacecraft1.png");
space_craft2 = loadImage("assets/spacecraft2.png");
space_craft3 = loadImage("assets/spacecraft3.png");
space_craft4 = loadImage("assets/spacecraft4.png");
iss_pic = loadImage("assets/iss.png");
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(330,130);
  iss.addImage(iss_pic);
  iss.scale = 0.5;
  
  spaceCraft = createSprite(285,240)
  spaceCraft.addImage(space_craft1);
  spaceCraft.scale = 0.15;

}

function draw() {
  background(space_bg);  
  spaceCraft.addImage(space_craft1);
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);
    
    if(keyDown("UP_ARROW"))
    {
      spaceCraft.y = spaceCraft.y -2;
    }
    if(keyDown("LEFT_ARROW"))
    {
      spaceCraft.addImage(space_craft4);
      spaceCraft.x = spaceCraft.x -1;
    }
    if(keyDown("RIGHT_ARROW"))
    {
      spaceCraft.addImage(space_craft3);
      spaceCraft.x = spaceCraft.x +1;
    }
    if(keyDown("DOWN_ARROW"))
    {
      spaceCraft.addImage(space_craft2);
    }
  }
  if (spaceCraft.y <= (iss.y + 70) && spaceCraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful",200,300);

  }

  drawSprites();
}