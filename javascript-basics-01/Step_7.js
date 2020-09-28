let shoeSize = prompt("Enter your shoe size: ");
let bDate = prompt("Enter your birth date: ");
let multShoe = (shoeSize, bDate) => {
  let result = shoeSize * 2;
  result += 5;
  result *= 50;
  result -= bDate;
  result += 1766;
  return result;
};
alert("Random result: " + multShoe(shoeSize, bDate));
