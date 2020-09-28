let greenDiv = document.querySelector(".green");
let redDiv = document.querySelector(".red");
let blueDiv = document.querySelector(".blue");

let paragraph = document.querySelector("#text");

greenDiv.addEventListener("click", () => {
  paragraph.className = "green";
});

redDiv.addEventListener("click", () => {
  paragraph.className = "red";
});

blueDiv.addEventListener("click", () => {
  paragraph.className = "blue";
});
