var canvas;
var music;

var player;
var box1
var box2;
var box3;
var box4;

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    
    canvas = createCanvas(800,600);
    
    player = createSprite(400,500,75,75);
    /*
    player.shapeColor = "grey";

    box1 = createSprite(100,500,50,20);
    box1.shapeColor = "red";
    box2 = createSprite(200,500,50,20);
    box2.shapeColor = "blue";
    box3 = createSprite(300,500,50,20);
    box3.shapeColor = "green";
    box4 = createSprite(400,500,50,20);
    box4.shapeColor = "purple";
    

*/

    

}

function draw() {
    //background(rgb(169,169,169));
    //create edgeSprite
    if(keyDown(left)){
        player.velocityX = -15;
    }
    if(keyDown(right)){
        player.velocityX = 15;
    }

    
    //add condition to check if box touching surface and make it box
    drawSprites();
}
