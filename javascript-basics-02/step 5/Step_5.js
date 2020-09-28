let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", () => {
    let j = i + 1;
    images[i].src = "images/image" + j + "_2.jpg";
  });
}
