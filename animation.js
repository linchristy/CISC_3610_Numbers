"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Setup the number to be displayed.
    Scene.sprite = number;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the number image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=Scene.sprite.frames[Scene.sprite.frame].frame.w;
    	Scene.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place,
// Click the button to start
document.addEventListener('DOMContentLoaded',()=> {
	let btn = document.getElementById("button");
	btn.addEventListener('click',Scene.start);
});

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "#000000";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

var counter =0;

Scene.mainLoop = function() {

	if(counter > 10){
		return;
	}else if(counter >= 10){
		Scene.clearCanvas();
		Scene.drawTen();
	}else{
		Scene.clearCanvas();
		Scene.draw();
	}

	// Animate at 2 frames a second.
    window.setTimeout(Scene.mainLoop, 500);
	// Advance to the next frame.
	Scene.sprite.frame++;
	// Increment counter
	counter++;
	
};

// draw number 10
Scene.drawTen = function(){
	Scene.canvasContext.drawImage(Scene.sprite.img,
		Scene.sprite.frames[1].frame.x,
		Scene.sprite.frames[1].frame.y,
		Scene.sprite.frames[1].frame.w,
		Scene.sprite.frames[1].frame.h,
		0,0,
		Scene.sprite.frames[1].frame.w,
		Scene.sprite.frames[1].frame.h);
	Scene.canvasContext.drawImage(Scene.sprite.img,
		Scene.sprite.frames[0].frame.x,
		Scene.sprite.frames[0].frame.y,
		Scene.sprite.frames[0].frame.w,
		Scene.sprite.frames[0].frame.h,
		190,0,
		Scene.sprite.frames[0].frame.w,
		Scene.sprite.frames[0].frame.h);
}

// draw from 0 to 9
Scene.draw = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img,
							Scene.sprite.frames[Scene.sprite.frame].frame.x,
							Scene.sprite.frames[Scene.sprite.frame].frame.y,
							Scene.sprite.frames[Scene.sprite.frame].frame.w,
							Scene.sprite.frames[Scene.sprite.frame].frame.h,
							100,0,Scene.sprite.frames[Scene.sprite.frame].frame.w,
							Scene.sprite.frames[Scene.sprite.frame].frame.h);
};


