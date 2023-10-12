let b1 = document.getElementById("b1");
//retrieve value from text box
b1.addEventListener("click", createListElement);
function createListElement() {
  if (userinput.value.length > 0) {
    let userinput = document.getElementById("userinput");
    //retieve the ul
    let ul = document.querySelector("ul");
    //create li element
    let li = document.createElement("li");
    //retrieve textbox value and add it as a text to list item
    let litext = document.createTextNode(userinput.value);
    li.appendChild(litext);
    ul.appendChild(li);
    userinput.value = "";
  }
}
//add a 'keypress' event such that items are added
//to list when enter key is pressed
userinput.addEventListener('keypress',enterKeyAdd);

function enterKeyAdd(event)
{
    if(event.keyCode == 13)
    {
        createListElement();
    }
}
