// // Using JavaScript to change the HTML

var heading = document.lastElementChild.firstElementChild;
heading.innerHTML = "Good Bye";
heading.style.color = "Red";

document.querySelector("input").click();

var lastList = document.querySelector('ul').lastElementChild;
lastList.innerHTML = "Mark";

document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Albatross";

document.getElementsByTagName("li");
document.getElementsByTagName("li").length;
document.getElementsByTagName("li")[2].style.color = 'red';

document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color = 'red';

document.getElementById("title");
document.getElementById("title").innerHTML = "Good Bye";

document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("a");
document.querySelector("li a");
document.querySelector("li.item");
document.querySelector("#list a");
document.querySelector("#list .item");
document.querySelectorAll("#list .item");
document.querySelectorAll("#list .item")[2].style.color = 'blue';

document.querySelector("li a").style.color = 'red';
document.querySelector("li").style.color = 'blue';

/* ------------------------------------------------------ */

// // Using JavaScript to change the CSS

document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.visibility = "hidden";
document.querySelector("h1").style.padding = "30%";
document.querySelector(".btn").style.backgroundColor = "Yellow";
document.querySelector("button").style.backgroundColor = "Yellow";

document.querySelector("button").classList;
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");

/* ------------------------------------------------------ */

// Text Manipulation and the Text Content Property

document.querySelector("h1").innerHTML;
document.querySelector("h1").textContent;
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";

/* ------------------------------------------------------ */

// Manipulating HTML Element Attributes

document.querySelector("a");
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");
document.querySelector("a").innerHTML = "Bing";
