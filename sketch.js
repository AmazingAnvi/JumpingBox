var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box = createSprite(random(20,750),20,50,50);
    box.shapeColor = "white"
    box.velocityX = 1;
    box.velocityY = 4;

    surface1 = createSprite(90,600,150,30)
    surface1.shapeColor = "skyblue"

    surface2 = createSprite(290,600,150,30)
    surface2.shapeColor = "orange"

    surface3 = createSprite(490,600,150,30)
    surface3.shapeColor = "violet"

    surface4 = createSprite(690,600,150,30)
    surface4.shapeColor = "lime"



}

function draw() {
    background(rgb(169,169,169));

    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
       box.shapeColor = "skyblue"
    }
    

    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
       box.shapeColor = "orange"
    }


    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
       box.shapeColor = "violet"
    }


    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
       box.shapeColor = "lime"
    }


    createEdgeSprites();
  //  box.bounceOff(edges);


    drawSprites();
}
