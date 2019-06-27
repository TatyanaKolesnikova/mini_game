"use strict";

var canvas, ctx;
var requestID;

	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	// this.add = function(...arr){
	// 	for ( var i = 0; i < arr.length; i++ ) {
	// 		arr[i].draw();
	// 	}
	// }
  

	//;



const btnStart = document.querySelector(".btn-start");
const score = document.querySelector("#score");

 
btnStart.onclick = function() {	

	for (var i = 0; i < 3; i++) fillWebsitePlaceFilter(i);


	//requestID = requestAnimationFrame(animate, ctx);		
};


		
		
	
	
		//console.log(randColor);
		var color = ["blue", "red", "black", "green", "gray"];
	function fillWebsitePlaceFilter(){
		 console.log(1);
		 
		var randColor = 0 ;	
		var width = 20;
		var height = 20;
		var posY = 0;
		var pixelsPerFrame = 1; 
		
		var posX = Math.round(0 + Math.random() * (canvas.offsetWidth - width - 0 + 1));
		posY = Math.round(0 + Math.random() * (canvas.offsetHeight - height - 0 + 1));
		randColor = Math.floor(Math.random() * color.length);
		console.log(randColor);
		console.log(color[randColor]);
		ctx.fillRect( posX, posY, width, height);
		ctx.fillStyle = color[randColor];
		ctx.fill();
		
		
		function animate() {
			
				//console.log(posY);
			if (posY <= (canvas.height - height)) {
			ctx.clearRect(posX, (posY - pixelsPerFrame), width, height);
			ctx.fillRect(posX, posY, width, height);
			posY += pixelsPerFrame;

			
			canvas.onclick = function() {
				var x = event.clientX;
				var y = event.clientY;
				console.log(y);
				console.log(posY);
				if(x == posX && y == posY){
					console.log(score.innerHTML);
				}
			}



			}else {
	 			cancelAnimationFrame(requestID);
			}
			window.requestAnimationFrame(animate);
		}


	animate();
}

	

		


