//event handling
//1.identify the event source
let b1=document.getElementById('b1');
//2.handle event listeners and function
b1.addEventListener('click',onClick);
//3.describe the function onClick
function onClick()
{
    console.log("Event generated!");
    b1.textContent="Event tested";
}
