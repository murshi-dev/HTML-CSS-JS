//event handling
//1.identify the event source
let b1 = document.querySelector("#b1");
//2.handle event listeners and function
b1.addEventListener("click", greetUser);
//3.describe the function onClick
function greetUser() {
  //retrieve the value from name text box
  let uname = document.querySelector("#yourname").value;
  //retrieve the value from contact text box
  let ucontact = document.querySelector("#yourcontact").value;
  //design the html content
  document.write("<h1>Welcome</h1>");
  document.write("Hello!" + uname + "and welcome to this page. ");
  document.write("Your contact is " + ucontact);
}
