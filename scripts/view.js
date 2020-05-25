let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(100, 100, 100, 100);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(300, 80, 100, 100);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(140, 280, 100, 100);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
