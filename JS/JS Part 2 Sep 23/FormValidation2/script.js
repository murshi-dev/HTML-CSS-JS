//1
let form = document.getElementById("form");

//retrieve the control values
let username = document.getElementById("username");
let email = document.getElementById("email");

//2
form.addEventListener("submit", formValidate);
//3
function formValidate(event) {
  //to avoid the form being submit by itself
  event.preventDefault();

  if (username.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s1");
    //change the caption of error message
    small.innerText = "username required";
    //change visibility to visible
    document.getElementById("s1").style.visibility = "visible";
  } else {
    document.getElementById("s1").style.visibility = "hidden";
    document.getElementById("username").style.borderColor = "green";
  }
  //check empty email
  if (email.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s2");
    //change the caption of error message
    small.innerText = "email required";
    //change visibility to visible
    document.getElementById("s2").style.visibility = "visible";
  } else {
    document.getElementById("s2").style.visibility = "hidden";
    document.getElementById("email").style.borderColor = "green";
  }

  //check empty gender
  if (form.gender.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s3");
    //change the caption of error message
    small.innerText = "gender required";
    //change visibility to visible
    document.getElementById("s3").style.visibility = "visible";
  } else {
    document.getElementById("s3").style.visibility = "hidden";
  }

  //check empty from level
  if (form.formlevel.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s4");
    //change the caption of error message
    small.innerText = "select form level required";
    //change visibility to visible
    document.getElementById("s4").style.visibility = "visible";
  } else {
    document.getElementById("s4").style.visibility = "hidden";
  }

  //check if check box selected
  //check empty from level
  if (form.subject1.checked || form.subject2.checked || form.subject3.checked) {
    document.getElementById("s5").style.visibility = "hidden";
  } else {
    //retrieve the id from html
    let small = document.getElementById("s5");
    //change the caption of error message
    small.innerText = "select atleast one subject";
    //change visibility to visible
    document.getElementById("s5").style.visibility = "visible";
  }
}


