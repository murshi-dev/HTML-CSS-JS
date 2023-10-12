let num1 = 0;
let num2 = 0;

// getInput as regular function
function getInput() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
}

// all these functions call getInput-callback function
function addNum() {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}

function subNum() {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) - parseInt(num2);
}

function mulNum() {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) * parseInt(num2);
}

function divNum() {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
}
