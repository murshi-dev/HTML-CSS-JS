//1--identify the event source
let b1 = document.querySelector("button");
//2--register the listener
b1.addEventListener("click", displayDetails);
//3--explain the function
function displayDetails(e) {
  e.preventDefault();
  //retrieve the values from username textbox
  let uname = document.querySelector("#username").value;
  //retrieve the values from contact textbox
  let ucontact = document.querySelector("#usercontact").value;
  //retrieve the values from contact textbox
  let uaddress = document.querySelector("#useraddress").value;
  //display the username and contact in the web page
  document.write("Hello " + uname);
  document.write("<BR>");
  document.write("Your contact number is: " + ucontact);
    document.write("<BR>");
  document.write("Your address is: " + uaddress);
}
