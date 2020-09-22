const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    ground1 = new ground(600,height,1200,20)
    pig1 = new pig(810,350)
    pig2 = new pig(810,220)
    log = new log_1(810,260,300, PI/2 )
    log2 = new log_1(810,180,300, PI/2 )
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground1.display();
    pig1.display();
    pig2.display();
    log.display();
    log2.display();
}