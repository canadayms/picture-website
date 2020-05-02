function insertPara1(){
	var insert = document.createElement("p");
	insert.setAttribute("class", "URL");
	insert.textContent = "source of all pictures: https://unsplash.com";
	document.getElementById("scr").appendChild(insert);
}

insertPara1();