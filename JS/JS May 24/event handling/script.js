//1.
let addB1 = document.getElementById("addButton");
//2.
addB1.addEventListener("click", calculateAdd);
//3.
function calculateAdd() {
  //retrieve the values from the text box
  let num1 = document.getElementById("firstnum").value;
  let num2 = document.getElementById("secondnum").value;
  //calculate the sum
  let addedValue = parseInt(num1) + parseInt(num2);
  //retrieve the result area
  let resultDiv = document.querySelector(".result");
  //now place the addedvalue in the resultdiv
  resultDiv.textContent = num1 + "+" + num2 + "=" + addedValue;
}
