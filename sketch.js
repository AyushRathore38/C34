const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18,box19,box20;
var ball;
var rope;



function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,600,1050,20);

    box1 = new Box(700,100,70,70);
    box2 = new Box(700,100,70,70);
    box3 = new Box(700,100,70,70);
    box4 = new Box(700,100,70,70);
    box5 = new Box(700,100,70,70);
    box6 = new Box(700,100,70,70);
    box7 = new Box(700,100,70,70);
    box8 = new Box(700,100,70,70);

    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(800,100,70,70);
    box14 = new Box(800,100,70,70);

    box15 = new Box(900,100,70,70);
    box16 = new Box(900,100,70,70);
    box17 = new Box(900,100,70,70);
    box18 = new Box(900,100,70,70);
    box19 = new Box(900,100,70,70);
    box20 = new Box(900,100,70,70);

    ball = new Ball(200,200,80,80);

    rope = new Rope(ball.body,{x:500,y:100});

}
function preload(){
    
    backgroundImg = loadImage("Image/bg2.jpg")

}

function draw(){
    background(backgroundImg);
      
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    
    ball.display();
    rope.display();

  
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}