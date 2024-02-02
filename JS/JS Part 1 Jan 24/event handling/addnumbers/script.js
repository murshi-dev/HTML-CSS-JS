//1.event source
const button = document.querySelector("button");
//2.register listener
button.addEventListener("click", onClickAdd);
//3.expand the function
function onClickAdd() {
  //retrieve the value from the textboxes
  //const num1=document.querySelector('#first').value;
  const num1 = document.getElementById("first").value;
  const num2 = document.getElementById("second").value;
  const sum = parseInt(num1) + parseInt(num2);
  //show this result in the result section/div in the web page
  //retreive the div first
  let resultDiv = document.getElementById("result");
  //assign the sum value to resultdiv
  resultDiv.textContent = num1 + "+" + num2 + "=" + sum;
}
