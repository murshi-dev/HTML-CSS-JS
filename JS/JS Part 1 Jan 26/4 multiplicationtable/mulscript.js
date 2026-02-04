//1
let btnTable = document.getElementById("genTable");
//2
btnTable.addEventListener("click", generateTable);
//3
function generateTable(e) {
  e.preventDefault();
  //retreive text box value
  let unumber = document.getElementById("unumber").value;
  //retrieve result area
  let resultDiv = document.getElementById("result");
  //a variable to hold the multiplication value
  let eachLineResult = "";
  //console.log(unumber);
  for (let i = 1; i <= 10; i++) {
    //accumulate until number 10
    eachLineResult = eachLineResult + i + "*" + unumber + "=" + i * unumber + "<br>";
  }
  resultDiv.innerHTML = eachLineResult;
}
