let form=document.getElementById('form');
let username=document.getElementById('username');
let email=document.getElementById('email');
let password=document.getElementById('password');

form.addEventListener('submit',formValidate);

function formValidate(event)
{
    //to prevent form by submitting itself
    event.preventDefault();

    if(username.value=='')
    {
       let small1=document.getElementById('s1');
       small1.innerText='username required';
       document.getElementById('s1').style.visibility='visible';
       document.getElementById('username').style.borderColor='black';
    }
    else{
        document.getElementById('s1').style.visibility='hidden';
        document.getElementById('username').style.borderColor='green';
    }


    if(email.value=='')
    {
       let small2=document.getElementById('s2');
       small2.innerText='email required';
       document.getElementById('s2').style.visibility='visible';
       document.getElementById('email').style.borderColor='black';
    }
    else{
        document.getElementById('s2').style.visibility='hidden';
        document.getElementById('email').style.borderColor='green';
    }


    if(password.value=='')
    {
       let small3=document.getElementById('s3');
       small3.innerText='password required';
       document.getElementById('s3').style.visibility='visible';
       document.getElementById('password').style.borderColor='black';
    }
    else{
        document.getElementById('s3').style.visibility='hidden';
        document.getElementById('password').style.borderColor='green';
    }


}