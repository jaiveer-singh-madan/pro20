var car, wall;
var speed, weight;
var d;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  wall = createSprite(1500,200,60,height/2);
  car= createSprite(50,200,50,50);
}

function draw() {
  background("pink");
   car.velocityX= speed;

   rectMode(CENTER);


   if(wall.x-car.x<car.width+wall.width/2){
     d= (0.5*weight*speed*speed)/22500;
     car.velocityX=0;
   if(d<100){
     car.shapeColor=color(0,255,0);
   }
   else if((d>=100)&&(d<=180)){
     car.shapeColor=color(230,230,0);
   }
   else if(d>180){
     car.shapeColor=color(0,255,0);
   }
  }
  drawSprites();
}