var backgroundImg, background;
function preload(){
backgroundImg=loadImg("background.png");
}

function setup() {
 createCanvas= (600,400);
 var background = createSprite(600,400);
 background.addImage(backgroundImg);
}

function draw() {
    background(0);
 drawSprites();
}