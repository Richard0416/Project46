var girl;
var wall1, wall2, wall3, wall4;
var ball;


function preload(){
girlImage= loadImage("Images/girlImage.png");
wallImage= loadImage("Images/wallImage.png");
hammerImage= loadImage("Images/hammer.png");
WallBreak=loadImage("Images/wallBreak.png"); 
}


function setup(){

createCanvas(900,700);
girl=createSprite(300,100, 10,20);
girl.addImage(girlImage);
girl.scale=.1;
wall1= createSprite(700,500, 80, 10);
wall1.addImage(wallImage);
wall1.scale=.1;
wall2= createSprite(700,200, 80, 10);
wall2.addImage(wallImage);
wall2.scale=.1;
wall3= createSprite(200, 700, 10,80);
wall3.addImage(wallImage);
wall3.scale=.1;
wall4= createSprite(200, 200, 10,80);
wall4.addImage(wallImage);
wall4.scale=.1;
hammer=createSprite(350, 550, 20, 20);
hammer.addImage(hammerImage); 
hammer.scale=.05;
hammer.setCollider("rectangle",0,0,90,65);
hammer.debug=true;
//wall1.addImage(WallBreak);
}

function draw(){
background("yellow");
drawSprites();

if (keyDown("UP")){
girl.y= girl.y-2;
}

if (keyDown("Down")){
    girl.y= girl.y+2
}

if (keyDown("Left")){
    girl.x= girl.x-2
}

if (keyDown("Right")){
    girl.x= girl.x+2
}

girl.collide(wall1);
girl.collide(wall2);
girl.collide(wall3);
girl.collide(wall4);

if (girl.isTouching(hammer)){
    hammer.x=girl.x;
    hammer.y=girl.y;
}

if (hammer.isTouching(wall1)){
    wall1.addImage(wallBreak)
    wall1.destroy();
}

}
