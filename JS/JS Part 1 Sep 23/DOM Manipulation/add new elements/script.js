let headingButton = document.getElementById("createHeadingButton");
headingButton.addEventListener("click", createHeading);

let listButton = document.getElementById("createListButton");
listButton.addEventListener("click", createList);

function createHeading() {
  //retrieve the div where div is to be displayed
  let headingContainer = document.getElementById("headingContainer");
  //create a new heading element using 'createElement'
  let newHeadingTag = document.createElement("h2");
  //add some text to the heading using 'createTextNode'
  let newHeadingText = document.createTextNode("Heading 2 Text");
//add the headingtext to the heading tag using 'appendChild'
  newHeadingTag.appendChild(newHeadingText);
  //add the headingtag to heading container using 'appendChild'
  headingContainer.appendChild(newHeadingTag);
}

function createList()
{
    let listContainer=document.getElementById('listContainer');
    let newListTag=document.createElement('ol');
    let newListText=document.createTextNode("New list");
    newListTag.appendChild(newListText);

    let listItem1=document.createElement('li');
    let listItem1Text=document.createTextNode('Item 1');
    listItem1.appendChild(listItem1Text);
    newListTag.appendChild(listItem1);

    let listItem2=document.createElement('li');
    let listItem2Text=document.createTextNode('Item 2');
    listItem2.appendChild(listItem2Text);
    newListTag.appendChild(listItem2);

    listContainer.appendChild(newListTag);
}
