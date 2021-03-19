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
  //Greater Integer Of 2 
function largerNumber(){
  let num1 = parseInt(prompt('Pick a number, any number:'));
  let num2 = parseInt(prompt('Pick another number, any number:'));
  if(num1 > num2) {
    alert(`The number ${num1} is greater than ${num2}!`);
  } else if(num2 > num1) {
    alert (`The number ${num2} is greater than ${num1}!`);
  } else {
    alert(`Since ${num1} and ${num2} are the same, neither is greater!`);
  }
}
  //Sign Of The Product Of 3 Integers
function signOfProduct(){
  let num1 = parseInt(prompt('What positive or negative integer comes to mind when I say Thursday?'));
  let num2 = parseInt(prompt('...How about Friday?'));
  let num3 = parseInt(prompt('...What about negative Tuesday?'));
  let product = num1 * num2 * num3;
  if(product === 0){
    alert('You really had to go and mess eveything up by putting 0. . .')
  }  else {
    let sign = product > 0 ? '+' : '-';
    alert(`The sign of ${product} is: ${sign}.`);    
  }
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