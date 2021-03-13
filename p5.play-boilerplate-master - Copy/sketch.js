//alias
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var box1, ground1, bgIm


function preload(){

  bgIm = loadImage("sprites/bg.png")
}


function setup() {
  createCanvas(800,800);
  engine = Engine.create()
  world = engine.world
  
  ground1 = new Ground(400,150,600,40)
  ball1 = new Ball(500,500,500)
  
  
}

function draw() {
  background(0);  

  Engine.update(engine)

  ground1.display()
 
  
}