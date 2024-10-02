//1.event source
let button = document.querySelector('button');
//2. register the listener
button.addEventListener('click',onClick);
//3.expand the function
function onClick()
{
    //retrieve the contents from the text box and put
    //in a local variable
    let thename=document.querySelector("#yourname").value;
    let thecontact=document.querySelector("#yourcontact").value;
    //display the variables in the webpage
    document.write("Hello "+thename);
    document.write("Your contact number is "+ thecontact)
}
