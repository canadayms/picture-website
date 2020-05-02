function insertPara(){
	var insert = document.createElement("p");
	insert.setAttribute("class", "URL");
	insert.textContent = "https://unsplash.com";
	document.getElementById("credit").appendChild(insert);
}

insertPara();