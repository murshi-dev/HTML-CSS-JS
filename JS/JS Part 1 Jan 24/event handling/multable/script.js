let button = document.querySelector("button");
button.addEventListener("click", displayMulTable);
function displayMulTable() {
  let result = "";
  let number = document.getElementById("number").value;
  for (let i = 1; i <= 10; i++) {
    //display in table format 2 * 3 = 6
    result = result + "<p>" + i + "*" + number + "=" + number * i + "</p>";
  }
  //display the result in the result div
  document.getElementById("result").innerHTML=result;
}
