"use strict";

var requestID;
var timerId;
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const score = document.querySelector("#score");
let w, h;
var color = ["#FB000D", "#810051", "#FFDF00", "#58E000", "#3515B0"];
var arrRect = [];


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
w = canvas.width = 800;
h = canvas.height = 600;
var widthRect = 20;
var heightRect = 20;

let Rect = function(){ 
	this.x = Math.round(0 + Math.random() * (w - widthRect - 0 + 1)); 
	this.y = 0;
	this.speed = 0.1 + Math.random() * 1; 
	this.color =  Math.floor(Math.random() * color.length);
	this.color = color[this.color];
	this.update = function(){ 
		this.y += this.speed;  
	};
	this.draw = function(){ 
		ctx.beginPath();
		ctx.fillRect( this.x, this.y, widthRect, heightRect);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();  
	};
};

function setup(){ 
	timerId = setInterval(function() {
		arrRect.push( new Rect() );
	}, 1000);
	window.requestAnimationFrame(loop);
}

canvas.addEventListener("click", (event) => {
	var xOffset = event.offsetX;
	var yOffset = event.offsetY;
	arrRect.forEach(function(element, i) {
		if (yOffset > element.y && yOffset < element.y + heightRect && xOffset > element.x && xOffset < element.x + widthRect) {
			arrRect.splice(i, 1);
			score.innerHTML = +score.innerHTML + 1;
		}
	})
});

function loop(){ 
	window.requestAnimationFrame(loop);
	ctx.clearRect(0,0,w,h);
	for (let i = 0; i < arrRect.length; i++){
		arrRect[i].update();
		arrRect[i].draw();
	}
}

btnStart.onclick = function() {	
	clearInterval(timerId);
	score.innerHTML = 0;
	arrRect = [];
	setup();
};

btnStop.onclick = function() {
	clearInterval(timerId);
	arrRect = [];
}

