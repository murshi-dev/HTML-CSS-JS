//1.
let form1 = document.getElementById("regForm");
//2.
form1.addEventListener("submit", validateForm);
//3.
function validateForm() {
  //to prevent the form from submitting itself
  event.preventDefault();
  let username = document.getElementById("uname").value;
  let useremail = document.getElementById("uemail").value;
  if (username == "") {
    let small1 = document.getElementById("s1");
    small1.innerText = "username required";
    small1.style.visibility = "visible";
  } else {
    document.getElementById("s1").style.visibility = "hidden";
  }
  if (useremail == "") {
    let small2 = document.getElementById("s2");
    small2.innerText = "email required";
    small2.style.visibility = "visible";
  } else {
    document.getElementById("s2").style.visibility = "hidden";
  }
  if (form1.gender.value == "") {
    let small3 = document.getElementById("s3");
    small3.innerText = "gender selection required";
    small3.style.visibility = "visible";
  } else {
    document.getElementById("s3").style.visibility = "hidden";
  }

  if (form1.formlevel.value == "") {
    let small4 = document.getElementById("s4");
    small4.innerText = "form selection required";
    small4.style.visibility = "visible";
  } else {
    document.getElementById("s4").style.visibility = "hidden";
  }
  if(form1.subject1.checked || form1.subject2.checked || form1.subject3.checked)
    {
        document.getElementById("s5").style.visibility = "hidden";
    }
    else{
        let small5 = document.getElementById("s5");
        small5.innerText = "subject selection required";
        small5.style.visibility = "visible";
    }
}
