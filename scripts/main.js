//Vault Entry Message
const vault = () =>{
  alert("Looks like you've stubmbled into my vault where I store my most classified projects...");
}

// About Me Button To Top
mybutton = document.getElementById("top-button");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  }
}
const topFunction = () =>{
  document.documentElement.scrollTop = 0
}

//Projects Buttons Assignemnt
  //Greater Integer Of 2 
const largerNumber = () => {
  let num1 = parseInt(prompt('Pick a number, any number:'));
  let num2 = parseInt(prompt('Pick another number, any number:'));
  if(Number.isNaN(num1) || Number.isNaN(num2)) {
    alert('BOTH inputs have to be numbers, try again.');
  } else if(num1 === num2) {
    alert(`Since ${num1} and ${num2} are the same, neither is greater!`);
  } else {
    let greaterNum = num1 > num2 ? num1 : num2;
    let lesserNum = num1 < num2 ? num1 : num2;
    alert(`The number ${greaterNum} is the greater than ${lesserNum}!`)
  }
}
  //Sign Of The Product Of 3 Integers
const signOfProduct = () =>{
  let num1 = parseInt(prompt('What positive or negative integer comes to mind when I say Thursday?'));
  let num2 = parseInt(prompt('...How about Friday?'));
  let num3 = parseInt(prompt('...What about negative Tuesday?'));
  let product = num1 * num2 * num3;
  if(product === 0){
    alert('You really had to go and mess eveything up by putting 0. . .')
  } else if(Number.isNaN(product)) {
    alert('You again, NUMBERS please!')    
  } else {
    let sign = product > 0 ? '+' : '-';
    alert(`The sign of ${product} is: "${sign}".`);       
  }
}
  //Sorting 3 Numbers In Numerical Order
const threeNumberSort = () =>{
  let num1 = parseInt(prompt('What is your favourite number?'));
  let num2 = parseInt(prompt('...least favourite?'));
  let num3 = parseInt(prompt('...second favourite?'));
  let threeNumbers = [num1, num2, num3];
  switch(threeNumbers) {
    case num1 > num2 && num2 > num3:
      alert(`I've taken the liberty to numerically order your numbers: ${num1}, ${num2}, ${num3}.`);
      break;
    case num1 > num2 && num2 === num3:
      alert(`I've taken the liberty to numerically order your numbers but ${num2} and ${num3} are equal: ${num1}, ${num2}, ${num3}.`);
      break;
    case num1 > num2 && num2 < num3 && num1 > num3:
      alert(`I've taken the liberty to numerically order your numbers: ${num1}, ${num3}, ${num2}.`);
      break;
    case num1 < num2 && num2 > num3 && num1 > num3:
      alert(`I've taken the liberty to numerically order your numbers: ${num2}, ${num1}, ${num3}.`);
      break;
    case num1 < num2 && num2 === num3:
      alert(`I've taken the liberty to numerically order your numbers but ${num2} and ${num3} are equal: ${num2}, ${num3}, ${num1}.`);
      break;
    case num1 < num2 && num2 < num3:
        alert(`I've taken the liberty to numerically order your numbers: ${num3}, ${num3}, ${num1}.`);
        break;
    case num1 === num2 && num2 === num3:
        alert(`${num1}, ${num2}, and ${num3} are equivalent so the order is: ${num1}, ${num2}, ${num3}`);
        break;
    default:
      alert('You should really learn what NUMBERS are!!')
      break;
  }
}

  //Button 4
const project4 = () =>{
  alert("Project 4 Is Almost Done");
}

 // Button 5
const project5 = () =>{
  alert("Stay Tuned For Project 5!");
}

  // Button 6
const project6 = () =>{
  alert("Touching Up Project 6");
}

  // Button 7
const project7 = () =>{
  alert("Project 7 Is Coming Along Great");
}

  // Button 8
const project8 = () =>{
  alert("Adding Semi-colons To Project 8");
}

  // Button 9
const project9 = () =>{
  alert("Project 9 Will Blow You Away");
}