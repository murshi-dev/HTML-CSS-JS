//1.event source
let b1 = document.getElementById("b1");
//2.register listener
b1.addEventListener("click", onClick);
//3.describe the function
function onClick() {
  //retrive the value from text box
  let number = document.getElementById("text1").value;
  //craete a local variable to store result
  let result = "";
  //convert the number from text box to an actual number
  let n = parseInt(number);
  //generate the table
  for (let i = 1; i <= 10; i++) {
    result = result + "<p>"+ i + "*" + n + "=" + i * n +"</p>";
  }
  //display the table in the result div - innerhtml
  document.getElementById('result').innerHTML=result;
}
