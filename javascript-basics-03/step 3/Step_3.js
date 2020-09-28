let greenDiv = document.querySelector(".green");
let redDiv = document.querySelector(".red");
let blueDiv = document.querySelector(".blue");

let paragraph = document.querySelector("#text");

greenDiv.addEventListener("click", () => {
  paragraph.style = "color: green";
});

redDiv.addEventListener("click", () => {
  paragraph.style = "color: red";
});

blueDiv.addEventListener("click", () => {
  paragraph.style = "color: blue";
});
