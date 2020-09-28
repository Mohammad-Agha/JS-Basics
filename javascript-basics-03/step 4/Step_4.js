let pass = document.querySelector("#password");
let confirm = document.querySelector("#confirmation");
let testButton = document.querySelector("button");

testButton.addEventListener("click", () => {
  if (pass.value != confirm.value) {
    pass.style = "outline: 1px solid red";
    confirm.style = "outline: 1px solid red";
  } else {
    pass.style = "outline: black";
    confirm.style = "outline: black";
  }
});
