//event handling
//1.identify the event source
let b1 = document.querySelector("#b1");
//2.handle event listeners and function
b1.addEventListener("click", onClick);
//3.describe the function onClick
function onClick() {
  //retrieve the value from name text box
  let first = document.querySelector("#first").value;
  //retrieve the value from contact text box
  let second = document.querySelector("#second").value;
  //add the values using add function
  let result=addTwo(parseInt(first),parseInt(second));
  //design the result div section
  let resultDiv = document.querySelector('#result');
  //use text content to change the content
  resultDiv.textContent=first+" + "+second+" = "+result;
}
function addTwo(n1,n2)
{
    //let result=n1+n2;
    return (n1+n2);
}
