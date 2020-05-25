//Events

window.addEventListener('click', c => {
    createBlock(30, 30, 50, 50, 'black', c)
});

window.addEventListener('click', c => {
    if (c.target !== document.getElementById("myCanvas")) return;
    ctx.beginPath();
    ctx.rect(300, 300, 50, 50) //X,Y,W,H
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
});

window.addEventListener('click', c => {
    if (c.target !== document.getElementById("myCanvas")) return;
    ctx.beginPath();
    ctx.rect(150, 420, 50, 50) //X,Y,W,H
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
});

window.addEventListener('click', c => {
    if (c.target !== document.getElementById("myCanvas")) return;
    ctx.beginPath();
    ctx.rect(400, 400, 50, 50) 
    ctx.fillStyle = "violet";
    ctx.fill();
    ctx.closePath();
});

window.addEventListener('click', c => {
    if (c.target !== document.getElementById("myCanvas")) return;
    ctx.beginPath();
    ctx.rect(400, 10, 50, 50) 
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
});

window.addEventListener('click', c => {
    if (c.target !== document.getElementById("myCanvas")) return;
    ctx.beginPath();
    ctx.rect(30, 350, 50, 50) 
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
});

window.addEventListener('load', () => {
    console.log("Loaded")
});

window.addEventListener('click', clickinfo => {
    if (clickinfo.target !== document.getElementById("hitBox")) return;
});