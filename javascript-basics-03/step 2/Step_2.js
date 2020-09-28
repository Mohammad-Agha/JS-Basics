let anchors = document.querySelectorAll("a");
let paragraph = document.querySelector("#texte");

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", () => {
    hideShowText(anchors[i].id, paragraph);
  });
}

const hideShowText = (id, paragraph) => {
  if (id == "show") {
    paragraph.style = "display: normal";
  } else if (id == "hide") {
    paragraph.style = "display: none";
  }
};
