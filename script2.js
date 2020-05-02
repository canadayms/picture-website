function insertDiv(){
	var insert = document.createElement("div");
	insert.setAttribute("class", "mainDiv");
	insert.setAttribute("id", "mainDiv");
	document.body.appendChild(insert);
}

insertDiv();


function insertPriceHead(){
	var insert = document.createElement("h3");
	insert.setAttribute("class", "priceHead");
	insert.setAttribute("id", "priceHead");
	insert.textContent = "Pricing";
	document.getElementById("mainDiv").appendChild(insert);
}

insertPriceHead();



function newLine(){
	var insert = document.createElement("br")
	document.getElementById("mainDiv").appendChild(insert);
}

newLine();
newLine();



function insertListDiv(){
	var insert = document.createElement("div");
	insert.setAttribute("class", "listDiv");
	insert.setAttribute("id", "listDiv");
	document.getElementById("mainDiv").appendChild(insert);
}

insertListDiv();

function insertUL(){
	var insert = document.createElement("ul");
	insert.setAttribute("class", "UL");
	insert.setAttribute("id", "ul1");
	document.getElementById("listDiv").appendChild(insert);
}

insertUL();

function insertLi1(){
	var insert = document.createElement("li");
	insert.setAttribute("class", "li1");
	insert.setAttribute("id", "li1");
	insert.textContent = "Familiy: 120";
	document.getElementById("ul1").appendChild(insert);
}

insertLi1();



function insertLi2(){
	var insert = document.createElement("li");
	insert.setAttribute("class", "li2");
	insert.setAttribute("id", "li2");
	insert.textContent = "Baby/Birth: 450";
	document.getElementById("ul1").appendChild(insert);
}

insertLi2();


function insertLi3(){
	var insert = document.createElement("li");
	insert.setAttribute("class", "li3");
	insert.setAttribute("id", "li3");
	insert.textContent = "Wedding: 950";
	document.getElementById("ul1").appendChild(insert);
}

insertLi3();


function insertLi4(){
	var insert = document.createElement("li");
	insert.setAttribute("class", "li4");
	insert.setAttribute("id", "li4");
	insert.textContent = "Engagement: 227";
	document.getElementById("ul1").appendChild(insert);
}

insertLi4();


function insertLi5(){
	var insert = document.createElement("li");
	insert.setAttribute("class", "li5");
	insert.setAttribute("id", "li5");
	insert.textContent = "Wedding + Engagement: 1097";
	document.getElementById("ul1").appendChild(insert);
}

insertLi5();


function insertLi6(){
	var insert = document.createElement("li");
	insert.setAttribute("class", "li6");
	insert.setAttribute("id", "li6");
	insert.textContent = "Party: 250 - 650";
	document.getElementById("ul1").appendChild(insert);
}

insertLi6();
