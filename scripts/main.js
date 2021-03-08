// function welcome() {​​
//     let username = prompt("What is your name?");    
//     alert("Welcome to my website " + username)
//     document.getElementById("saywelcome").innerHTML = message; 
// }​​

// function lights(){
//     let color = prompt("What color is the light now?");

//     if (color === "red") {
//         alert("STOP!");
//     }
//     else if (color === "green")
//         alert("GO!");

//     else if (color === "yellow") {
//         alert("Stop if it is safe to do so");
//     }
//     else if (color === "amber") {
//         alert("Stop if it is safe to do so")
//     }
//     else {
//         alert("Invalid Input")
//     }
// }

// lights();
// About Me Button To Top
mybutton = document.getElementById("top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0
}