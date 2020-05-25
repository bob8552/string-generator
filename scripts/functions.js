//Functions go here

function infoAlert() {
    window.alert("Test")
}

/*  Old

    function newBlock() {
        ctx.beginPath();
        ctx.rect(100, 100, 50, 50);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }

*/

function returnDate() {
    window.alert(Date.now())
}

function createBlock(x, y, w, h, colour, clickinfo) {
    if (clickinfo.target !== document.getElementById("myCanvas")) return;
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();
}

function createBlockL(x, y, w, h, colour, location, clickinfo) {
    if (clickinfo.target !== document.getElementById(location)) return;
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();
}
