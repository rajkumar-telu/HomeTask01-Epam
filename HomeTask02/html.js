let header = document.createElement("header");

let main = document.createElement("main");

let img = document.createElement("img");

img.src = "./img/logo.png";
img.classList.add("logo");
header.appendChild(img);

let searchBox = document.createElement('div');
searchBox.classList.add("search-box");

let searchBar = document.createElement("input");
searchBar.classList.add("search-bar");
searchBar.setAttribute("type","text");
searchBar.setAttribute("placeholder","SEARCH HERE");

let searchBtn = document.createElement('button');
searchBtn.classList.add("search-btn");
searchBtn.textContent = '🔎︎';

searchBox.appendChild(searchBar);
searchBox.appendChild(searchBtn);

main.appendChild(searchBox);

let mainContainer = document.createElement('div');
mainContainer.classList.add("main-container");
main.appendChild(mainContainer);

let pages = document.createElement('div');
pages.classList.add("pages");

document.body.prepend(pages);
document.body.prepend(main);
document.body.prepend(header);