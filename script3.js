function insertDiv(){
	var insert = document.createElement("div");
	insert.setAttribute("class", "mainDiv");
	insert.setAttribute("id", "mainDiv");
	document.body.appendChild(insert);
}

insertDiv();


function insertLinkHead(){
	var insert = document.createElement("h4");
	insert.setAttribute("class", "linkHead");
	insert.setAttribute("id", "linkHead");
	insert.textContent = "Useful Links";
	document.getElementById("mainDiv").appendChild(insert);
}

insertLinkHead();


function insertLink1(){
	var insert = document.createElement("a");
	insert.setAttribute("class", "link1");
	insert.setAttribute("id", "link1");
	var titleStr = document.createTextNode("Unsplash");
	insert.appendChild(titleStr);
	insert.title = "Unsplash";
	insert.href = "https://unsplash.com";
	document.getElementById("mainDiv").appendChild(insert);
}

insertLink1();


function newLine(){
	var insert = document.createElement("br")
	document.getElementById("mainDiv").appendChild(insert);
}

newLine();
newLine();
newLine();



function insertDownloadHead(){
	var insert = document.createElement("h4");
	insert.setAttribute("class", "dHead");
	insert.setAttribute("id", "dHead");
	insert.textContent = "Download Sample Picture";
	document.getElementById("mainDiv").appendChild(insert);
}

insertDownloadHead();

// Code to download file 
function insertDownloadAnchor(){
	var insert = document.createElement("a");
	insert.setAttribute("class", "dAnchor");
	insert.setAttribute("id", "dAnchor");
//	insert.href = "C:/Users/Canaday/Desktop/School/CS290/PROJECT/Pic5.jpg";
	insert.href = "http://web.engr.oregonstate.edu/~canadami/Pic5.jpg";
	insert.download = "Pic5.jpg";
	document.getElementById("mainDiv").appendChild(insert);
}

insertDownloadAnchor();


function insertButton(){
	var button = document.createElement("button");
	button.setAttribute("id", "button");
	button.setAttribute("type", "submit");
	button.textContent = "Download";
	document.getElementById("dAnchor").appendChild(button);
}

insertButton();


/*
//Code to open file in new window
function insertDownloadForm(){
	var insert = document.createElement("form");
	insert.setAttribute("class", "dForm");
	insert.setAttribute("id", "dForm");
	insert.method = "get";
	insert.action = "Pic5.jpg";
	document.getElementById("mainDiv").appendChild(insert);
}

insertDownloadForm();


function insertButton(){
	var button = document.createElement("button");
	button.setAttribute("id", "button");
	button.setAttribute("type", "submit");
	button.textContent = "Download";
	document.getElementById("dForm").appendChild(button);
}

insertButton();

*/






