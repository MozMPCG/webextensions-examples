var count = 0

document.getElementById("create").addEventListener("click", clickButton);

function clickButton() {
	count += 1;
	createNote();
}

function createNote() {
	var newDiv = document.createElement("div");
	newDiv.className = "box";
	var note = document.getElementById("note").value;
	var newNote = document.createTextNode(count + ". " + note);
	newDiv.appendChild(newNote);
	var color = document.getElementById("color").value;
	newDiv.style.backgroundColor = color;
	var postit = document.getElementById("postit");
	postit.appendChild(newDiv);
}