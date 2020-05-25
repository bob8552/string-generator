window.addEventListener('click', () => {
    ctx.beginPath();
    ctx.rect(355, 4, 104, 445);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
})