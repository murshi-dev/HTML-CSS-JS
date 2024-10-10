//1.identify the source - form
const form = document.getElementById("form");
//2.add listeners
form.addEventListener("submit", validateForm);
//3.explain the function
function validateForm() {
  //retrieve the values from the controls
  const username = document.getElementById("uname").value;
  const userpass = document.getElementById("upass").value;
  const confirmpass=document.getElementById("cpass").value;

  //check if the value are empty
  if (username.trim() == "") {
    alert("username is required");
    return false;
  }
  if (userpass.trim() == "") {
    alert("password is required");
    return false;
  }
  if(userpass.length<5)
  {
    alert("password must be not be less than 5");
    return false;
  }
  if(userpass!=cpass)
  {
    alert("passwords does not match");
    return false;
  }
  alert("Successful Registration");
  return true;
}
