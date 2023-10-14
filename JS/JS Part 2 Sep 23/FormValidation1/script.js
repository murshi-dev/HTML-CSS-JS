//1
let form = document.getElementById("form");
//2
form.addEventListener("submit", validateForm);
//3
function validateForm() {
  //retrieve all the values from the controls
  let uname = document.getElementById("uname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmpassword = document.getElementById("confirmpassword");

  //check each control
  //check username is empty
  if (uname.value == "") {
    alert("user name is required");
    return false;
  }
  //check email is empty
  if (email.value == "") {
    alert("email is required");
    return false;
  }
  //check password is atleast 5 charecters
  if (password.value.length < 5) {
    alert("atleast 5 charecters required for password");
    return false;
  }
  //check if password and confirm password are same
  if (password.value != confirmpassword.value) {
    alert("passwords does not match");
    return false;
  }
  alert("register success");
  return true;
}
