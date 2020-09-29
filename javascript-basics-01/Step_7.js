let shoeSize = document.querySelector("#shoe_size");
let bDate = document.querySelector("#year");
let button = document.querySelector("#validate");

let multShoe = (shoeSize, bDate) => {
  let result = shoeSize * 2;
  result += 5;
  result *= 50;
  result -= bDate;
  result += 1766;
  return result;
};

button.addEventListener("click", () => {
  alert("Random result: " + multShoe(shoeSize.value, bDate.value));
});
