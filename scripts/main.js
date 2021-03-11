//Vault Entry Message
function vault() {
  alert("Looks like you've stubmbled into my vault where I store my most classified projects...");
}
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
//Projects Buttons Assignemnt
  //Button 1
function project1(){
  alert("Project 1 Is Coming Soon");
}

  //Button 2
function project2(){
  alert("Project 2 Is Under Development");
}

  //Button 3
function project3(){
  alert("Debugging Project 3");
}

  //Button 4
function project4(){
  alert("Project 4 Is Almost Done");
}

 // Button 5
function project5(){
  alert("Stay Tuned For Project 5!");
}
  // Button 6
function project6(){
  alert("Touching Up Project 6");
}
  // Button 7
function project7(){
  alert("Project 7 Is Coming Along Great");
}
  // Button 8
function project8(){
  alert("Adding Semi-colons To Project 8");
}
  // Button 9
function project9(){
  alert("Project 9 Will Blow You Away");
}