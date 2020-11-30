var bullet;
var wall;

var thickness;
var weight;
var speed;

function setup(){
  createCanvas(1600, 400);
  thickness = Math.round(random(22, 83));
  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));

  bullet = createSprite(50, 200, 35, 15);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
}

function draw(){
  background(0, 0, 0);

  // bullet damage calculator
  // also collision detection algorithm
  if(wall.x - bullet.x < bullet.width / 2 + wall.width / 2){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10){
      bullet.shapeColor = "red";
    }
    else{
      bullet.shapeColor = "lime";
    }
  }

  console.log(damage);
  drawSprites();
}