const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var engine, world;

var target1,target2,target3;
var weapon;
var floor;
var slinger;

function preload() {
  backgroundImg = loadImage("photos/Elder'sRecess.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    target1 = new Dragon(600,320,150,150);
    target2 = new Dragon(780,320,150,150);
    weapon = new Blade(120,200,30,30);
    floor = new Ground(600,400,1200,20);
    slinger = new SlingShot(weapon.body,{x:120,y:200});
}

function draw(){
  background(backgroundImg);
  Engine.update(engine);

  target1.display();
  target2.display();
  weapon.display();
  floor.display();
  slinger.display();

}

function mouseDragged(){
  Matter.Body.setPosition(weapon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slinger.fly();
}