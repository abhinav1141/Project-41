const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Bruce;
var thu1,thu2,thu3,thu4;
var thunder;
var maxDrops=100;
drops=[];
var rain;
function preload(){
    thu1=loadImage("1.png");
    thu2=loadImage("2.png");
    thu3=loadImage("3.png");
    thu4=loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    Bruce=new Umbrella(700,600);
    rain=new Drop(0,0)
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drop(random(0,600),random(0,600)));
    }
}

function draw(){
    background("black");
    Engine.update(engine);
    if (frameCount%100 === 0) {
        thunder = createSprite(random(0, 700), 0,100,100);
        var rand = Math.round(random(1,4));
        
        switch(rand){
            case 1: thunder.addImage("thunder1",thu1);
            break;
            case 2: thunder.addImage("thunder1", thu2);
            break;
            case 3: thunder.addImage("thunder1", thu3);
            break;
            case 4: thunder.addImage("thunder1",thu4);
            break;

           
        }
       
    }
    if(frameCount%110===0){
        thunder.visible=false
        }
    Bruce.display();
    rain.display();
    rain.update();
    drawSprites();
}   

