var counter = 0; // define a variable that is responsible for counting

document.getElementById("btn").onclick = function() //Target the button and add the .onclick propery. Equal to a function (that does etc)
{
    counter ++; // counter will be added by 1. Important to add this first so the computer will count the button press as 1 first in memory.
    window.alert("You pressed the button " + counter + " times!"); // Add the message + counter to display the count
}


let me;
me = "Shaker"
console.log(me);
// hidden message in console log just for extra