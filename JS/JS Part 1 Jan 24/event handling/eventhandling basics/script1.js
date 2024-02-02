//1. event source
const button = document.querySelector("button");
//2. register the listener
button.addEventListener('click',onClick);
//3. expand the function
function onClick()
{
    //change the caption of the button
    button.innerHTML="changed text";
}

