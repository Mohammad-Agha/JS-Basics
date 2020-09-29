let age = document.querySelector("#age");
let button = document.querySelector("#validate");

button.addEventListener("click", () => {
  age.value >= 18 ? alert("you are over 18") : alert("you are under 18");
});
