window.addEventListener('load', () => {
    console.log("Ready");
});

window.addEventListener('load', () => {
    document.getElementById("emptySpace").innerHTML = parseInt(accessCookie("money"), 10);
});

window.addEventListener('error', e => {
    console.log(e)
});