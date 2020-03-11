
//Horse Lords psychedelic page

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	blendMode(DIFFERENCE);
	//frameRate(200);

	fill(255);
	rect(0,0,window.innerWidth, window.innerHeight);

	//set up the link
	var canvas = document.getElementById('defaultCanvas');
	// var a = document.createElement('a');
	// a.href= 'page.html';
	// a.appendChild(canvas);
	// document.body.appendChild(a);
	// canvas.onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("clicked");
	// }
	canvas.ondblclick = function(e){
		window.location.href = "./page.html";
		console.log("double clicked");
	}
}

var barWidth = 23;
var barWidth2 = 30;
var inc = 100;
var spot, spot2;
var toggle = 0;

function draw(){
	background(255);
	inc++;
	

	textSize(window.innerWidth/5.5);
	textStyle(ITALIC);
	textFont("Helvetica");
	if(toggle == 1){
		fill(255);
		toggle = 0;
	}else if(toggle == 0){
		fill(0);
		toggle = 1;
	}

	noStroke();
	text("Horse Lords", 0, window.innerHeight/2);
	
	for(var i = 0; i < window.innerWidth/barWidth; i++){

		spot = i*(barWidth*2)-inc;
		if(spot<0){
			spot = window.innerWidth;
		}
		fill(255);
		rect(spot,0,barWidth,window.innerHeight);
	}

	for(var i = window.innerWidth; i > 0; i--){

		spot2 = i*(barWidth2*2)+(inc+15);
		if(spot<window.innerWidth){
			spot2 = 0;
		}
		fill(0);
		rect(spot2,0,barWidth2,window.innerHeight);
	}

	if(frameCount > 2500){
		spot = i*(barWidth*2)-inc;
		spot2 = i*(barWidth2*2)+(inc+15);
	}

	
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  setup();
  draw();
}