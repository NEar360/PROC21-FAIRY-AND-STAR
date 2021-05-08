var starImg,bgImg;
var star, starBody,sounds;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,changeView,fairyBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadAnimation("star.png","starImage.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
	sounds = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;

	//write code to play fairyVoice sound
	sounds.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(400, 300);
	fairy.addAnimation("fairies", fairyImg);
	fairy.changeAnimation("fairies");
	fairy.scale = 0.2;
	fairyBody = Bodies.circle(600, 375, 5, { restitution: 0.5, isStatic: true });
	World.add(world, fairy);

	star = createSprite(650,30);
	star.addAnimation("stars",starImg);
	star.changeAnimation("stars");
	star.scale = 0.05;
	starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true });
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  ellipseMode(RADIUS);
  
  star.x= starBody.position.x; 
  star.y= starBody.position.y;
  
	fairy.x = fairyBody.position.x;
	fairy.y = fairyBody.position.y;
	keyPressed();
  console.log(star.y);

  //write code to stop star in the hand of fairy
	if(star.y>400 && starBody.position.y>400){
		Matter.Body.setStatic(starBody, true);
	}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);
		 
	}

	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW){
		fairy.x = fairy.x+10
	}
	//
	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x-10;
	}
}
