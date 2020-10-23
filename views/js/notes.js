
window.addEventListener("load", () => {
	if (localStorage.getItem("note")) {
		document.getElementById("area").value = localStorage.getItem("note");
	}
});

function save() {
  var area = document.getElementById("area");
  if(area.value != '') {
    localStorage.setItem("note", area.value);
		alert("Saved successfully!")
  }  
}

