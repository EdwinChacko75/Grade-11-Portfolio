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
  /* 
  Prompts user for 2 inputs and outputs which number is greater than 
  the other to 'Answer Box'.
  */
  
  let num1 = parseInt(prompt('Pick a number, any number:'));
  let num2 = parseInt(prompt('Pick another number, any number:'));
  
  ((Number.isNaN(num1) || Number.isNaN(num2))
    ? output = 'BOTH inputs have to be numbers, try again.'
    : (num1 === num2)
    ? output = `Since ${num1} and ${num2} are the same, neither is greater!`
    : (num1 > num2)
    ? output = `The number ${num1} is greater than ${num2}!`
    : output = `The number ${num2} is greater than ${num1}!`
  )

  document.getElementById("answer-box").innerHTML = output;

}
//Sign Of The Product Of 3 Integers
const signOfProduct = () =>{
  /* 
  Prompts user for 3 inputs and outputs the sign(+, -) of the product to 'Answer Box'.
  */

  let num1 = parseInt(prompt('What positive or negative integer comes to mind when I say Thursday?'));
  let num2 = parseInt(prompt('...How about Friday?'));
  let num3 = parseInt(prompt('...What about negative Tuesday?'));
  
  let product = num1 * num2 * num3;
  
  ((product === 0)
    ? output = 'You really had to go and mess eveything up by putting 0. . .'
    : (Number.isNaN(product))
    ? output = 'You again, NUMBERS please!'
    : (product > 0) 
    ? output = `The sign of ${product} is: "+".`
    : output = `The sign of ${product} is: "-".`
  )
  
  document.getElementById("answer-box").innerHTML = output;

}
//Sorting 3 Numbers In Numerical Order
const threeNumberSort = () =>{
  /* 
  Prompts user for 3 inputs and outputs them to 'Answer Box' in numerical order. 
  */

  let num1 = parseInt(prompt('What is your favourite number?'));
  let num2 = parseInt(prompt('...least favourite?'));
  let num3 = parseInt(prompt('...second favourite?'));
  
  ((num1 > num2 && num2 > num3) 
    ? output = `I've taken the liberty to numerically order your numbers: ${num3}, ${num2}, ${num1}.`
    : (num1 > num2 && num2 < num3 && num1 > num3) 
    ? output = `I've taken the liberty to numerically order your numbers: ${num2}, ${num3}, ${num1}.`
    : (num1 < num2 && num2 > num3 && num1 > num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num3}, ${num1}, ${num2}.`
    : (num1 > num2 && num2 < num3 && num1 > num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num1}, ${num3}, ${num2}.`
    : (num1 < num2 && num2 > num3 && num1 < num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num1}, ${num3}, ${num2}.`
    : (num1 > num2 && num2 < num3 && num1 < num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num2}, ${num1}, ${num3}.`  
    : (num1 < num2 && num2 < num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num1}, ${num2}, ${num3}.`
    : (num1 > num2 && num2 === num3) 
    ? output = `I've taken the liberty to numerically order your numbers but ${num2} and ${num3} are equal: ${num2}, ${num3}, ${num1}.`
    : (num1 < num2 && num2 === num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num2} and ${num3} are equal: ${num1}, ${num2}, ${num3}.`
    : (num1 === num2 && num2 > num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num1} and ${num2} are equal: ${num3}, ${num2}, ${num1}.`
    : (num1 === num2 && num2 < num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num1} and ${num2} are equal: ${num1}, ${num2}, ${num3}.`
    : (num1 > num2 && num1 === num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num1} and ${num3} are equal: ${num2}, ${num1}, ${num3}.`
    : (num1 < num2 && num1 === num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num1} and ${num3} are equal: ${num1}, ${num3}, ${num2}.`
    : (num1 === num2 && num2 === num3)
    ? output = `${num1}, ${num2}, and ${num3} are equivalent so the order is: ${num1}, ${num2}, ${num3}`
    : output = 'You should really learn what NUMBERS are!!'
  );

  document.getElementById("answer-box").innerHTML = output;

}

// Multiples of 3 up to 1000 via a for loop
const forSumThrees = () => {
  /* 
  For loop that goes through numbers 1 to 1000 and sums the mutilples of three. 
  Outputs the value to 'Answer Box'.
  */

  let answer = 0;
  
  for(let i = 0; i < 1000; i += 3){ 
    answer += i;
  }

  document.getElementById("answer-box").innerHTML = `The sum of the multiples of 3 under 1000 is: ${answer}!`;

}

// Multiples of 3 up to 1000 via a while loop
const whileSumThrees = () =>{
  /* 
  While loop that goes through numbers 1 to 1000 and sums the mutilples of three. 
  Outputs the value to 'Answer Box'.
  */

  let answer = 0;
  let i = 0;
  
  while(i < 1000) {
    answer = answer + i;
    i += 3;
  }
  
  document.getElementById("answer-box").innerHTML = `The sum of the multiples of 3 under 1000 is: ${answer}!`;

}

// Identifying multiples of 4, 10, and both from numbers 1 to 100.
const tenFour = () =>{
  /* 
  Counts from numbers 1 to 100 and logs multiples of 4 as 'Four', multiples of 10 as 
  'Ten', and multiples of both as 'TenFour!'. Output is logged to the console.
  */
  
  let answer = '';
  
  for(let i = 1; i <= 100; i++) {
    
    ((i % 4 === 0 && i % 10 === 0)
      ? answer += ('TenFour!')
      : (i % 4 === 0)
      ? answer += ('Four')
      : (i % 10 === 0)
      ? answer += ('Ten')
      : answer += (` ${i} `)
    );

  }
  
  console.log(answer);
  document.getElementById("answer-box").innerHTML = 'Check Out The Console';

}

// Determining century for any given year
const centuryFromYear = () =>{
  /* Prompts user for a year greater than 1 and optputs the century of that year. */
  
  let year = parseInt(prompt('If you could travel to any year, what year would you go to?'));
  let century = Math.floor((year-1)/100) + 1;
  let lastDig = century % 10;
  
  ((century === 0 || century < 0) 
  ? output = `Time travel is cool and all, but what even is the year ${year}?`
  : (Number.isNaN(century))
  ? open("https://www.youtube.com/watch?v=ZJEIKkPXirg&ab_channel=KidsAcademy")
  : (lastDig === 1)
  ? output = `${year} is in the ${century}st century!`
  : (lastDig === 2)
  ? output = `${year} is in the ${century}nd century!`
  : (lastDig === 3)
  ? output = `The year ${year} is in the ${century}rd century!`
  : output = `The year ${year} is in the ${century}th century!`
  )

  document.getElementById("answer-box").innerHTML = output;

}

// Third angle of a triangle function
const thirdAngle = () =>{
  /* Prompts user for 2 angles of a triangle, calculates and outputs the third angle. */

  let angle1 = parseInt(prompt('Give me one angle of a triangle.'));
  let angle2 = parseInt(prompt('Give me another angle of the same triangle.'));
  let angle3 = 180 - angle1 - angle2;

  ((angle1 < 0 || angle2 < 0 || angle3 < 0) 
  ? output = 'Angles of a triangle cannot be negative integers.'
  : (angle1 === 0 || angle2 === 0 || angle3 === 0)
  ? output = 'ANGLES OF A TRIANGLE please and thank you!'
  : (Number.isNaN(angle3))
  ? open("https://en.wikipedia.org/wiki/Number")
  : output = `The third angle of your triangle is ${angle3}°!`
  )

  document.getElementById("answer-box").innerHTML = output;
}

// Reset answer box to display 'Answer Box'
const resetAnswerBox = () => {

  document.getElementById("answer-box").innerHTML = 'Answer Box';

} 