// DOM #1

const boxElements = document.querySelectorAll(".box");
const pElements = document.querySelectorAll("p");

boxElements.forEach((box) => {
  box.style.backgroundColor = "purple";
});
pElements.forEach((p) => {
  p.style.fontSize = "20px";
});

const header2 = document.createElement("h2");
header2.textContent = "Hello world";

document.body.appendChild(header2);

// DOM #2

const header1 = document.querySelector("h1");
header1.textContent = "Cat";

const mouseElements = document.querySelectorAll(".mouse");
mouseElements.forEach((element) => {
  element.style.backgroundColor = "gray";
});

const pElement = document.createElement("p");
pElement.textContent = "Some text for this p";
const catElement = document.querySelector("#cat");
catElement.appendChild(pElement);
