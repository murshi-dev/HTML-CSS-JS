//1--identify the event source
let b1 = document.querySelector("button");
//2--register the listener
b1.addEventListener("click", validateLogin);
//3--explain the function
function validateLogin(e) {
    e.preventDefault();//to prevent the form from
                        //submitting itself
  //retrieve values from the text box and password box
  let u1 = document.getElementById("username").value;
  let p1 = document.getElementById("userpassword").value;

  //validation
  if (u1 == "" || p1 == "") {
    //display error message --target the <p> tag
    document.getElementById("msg").textContent = "All Fields Required";
    document.getElementById("msg").style.color="red";
  } else {
    //display success message --target the <p> tag
    document.getElementById("msg").textContent = "Welcome " + u1;
    document.getElementById("msg").style.color="green";
  }
}
