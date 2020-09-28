let anchorShow = document.querySelector("#show");
let anchorHide = document.querySelector("#hide");
let paragraph = document.querySelector("#texte");

anchorShow.addEventListener("click", () => {
  paragraph.style = "display: normal";
});

anchorHide.addEventListener("click", () => {
  paragraph.style = "display: none";
});
