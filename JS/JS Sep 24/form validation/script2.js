//1
const form = document.getElementById("form");
//2
form.addEventListener("submit", checkFormEntry);
//3
function checkFormEntry() {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const useremail = document.getElementById("useremail").value;
  const userpass = document.getElementById("userpass").value;
  const confirmpass = document.getElementById("confirmpass").value;

  const gender = document.querySelector('input[name="gender"]:checked');

  const formlevel = document.getElementById("formlevel").value;

  const subject1 = document.getElementById("subject1").checked;
  const subject2 = document.getElementById("subject2").checked;
  const subject3 = document.getElementById("subject3").checked;

  const small1 = document.getElementById("s1");
  const small2 = document.getElementById("s2");
  const small3 = document.getElementById("s3");
  const small4 = document.getElementById("s4");
  const small5 = document.getElementById("s5");
  const small6 = document.getElementById("s6");
  const small7 = document.getElementById("s7");

  if (username.trim() == "") {
    small1.innerText = "username required";
    small1.style.visibility = "visible";
  } else {
    small1.style.visibility = "hidden";
  }

  //check email
  if (useremail.trim() == "") {
    small2.innerText = "email required";
    small2.style.visibility = "visible";
  } else {
    small2.style.visibility = "hidden";
  }

  //check password is min 5 charecters
  if (userpass.length < 5) {
    small3.innerText = "password min 5 charecter required";
    small3.style.visibility = "visible";
  } else {
    small3.style.visibility = "hidden";
  }

  // Check if confirm password is empty
  if (confirmpass.trim() == "") {
    small4.innerText = "confirm password required";
    small4.style.visibility = "visible";
  }
  // Check if passwords do not match (only if confirm password is not empty)
  else if (userpass != confirmpass) {
    small4.innerText = "passwords do not match";
    small4.style.visibility = "visible";
  } else {
    small4.style.visibility = "hidden";
  }

  //check gender selection
  if (!gender) {
    small5.innerText = "gender selection is required";
    small5.style.visibility = "visible";
  } else {
    small5.style.visibility = "hidden";
  }

  //check the form selection
  if (formlevel == "") {
    small6.innerText = "form selection is required";
    small6.style.visibility = "visible";
  } else {
    small6.style.visibility = "hidden";
  }

  if (!subject1 && !subject2 && !subject3) {
    small7.innerText = "subject selection is required";
    small7.style.visibility = "visible";
  } else {
    small7.style.visibility = "hidden";
  }
}
