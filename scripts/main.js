//Vault Entry Message
const vault = () => alert("Looks like you've stubmbled into my vault where I store my most classified projects...");

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
  let secondLast = century % 100;
  
  ((century === 0 || century < 0) 
  ? output = `Time travel is cool and all, but what even is the year ${year}?`
  : (Number.isNaN(century))
  ? open("https://www.youtube.com/watch?v=ZJEIKkPXirg&ab_channel=KidsAcademy")
  : (secondLast > 10 && secondLast < 14 && lastDig === 1)
  ? output = `${year} is in the ${century}th century!`
  : (secondLast > 10 && secondLast < 14  && lastDig === 2)
  ? output = `${year} is in the ${century}th century!`
  : (secondLast > 10 && secondLast < 14  && lastDig === 3)
  ? output = `${year} is in the ${century}th century!`
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
const resetAnswerBox = () => document.getElementById("answer-box").innerHTML = 'Answer Box';

// Random 3 Numbers
  
  // Variables declared in global scope to be used in both encryption and decryption
  let random1 = '';
  let random2 = '';
  let random3 = '';

const random = () => {
  /*
  Generates 3 random integers that are later used in encryption and decryption
  */
  const numbers = Array(9).fill().map((_, index) => index + 1); // Inspired by Felix Lemke on StackOverflow
  numbers.sort(() => Math.random() - 0.5);
  
  //Extracts the first three digits of the numbers array
  random1 = numbers.slice(0, 1);  
  random2 = numbers.slice(1, 2);
  random3 = numbers.slice(2, 3);
}

// Text Encryption Function
  
  // Variables declared in global scope to be used in both encryption and decryption
  let cipherText2 = '';
  let beginning = '';
  let end = '';
  let middle = '';

const encrypt = () => {
  /* 
  encrypt() prompts the user for a message which is then encrypted 
  and output to the answer-box 
  */

  let plainText = prompt('Enter you top secret message here:');
  
  if (plainText === null || plainText == '') { //If nothing is entered

    document.getElementById("answer-box").innerHTML =  "You're no fun, enter something to be encrypted"

  } else { //If something is entered

    let reverseText = '';

    for(let i = plainText.length - 1; i > - 1; i--) { //Reverses the order of the message
      reverseText += plainText[i]
    }
    
    //Splits reversed message into 3 parts
    beginning = reverseText.slice(0, Math.ceil(plainText.length/3));
    end = reverseText.slice(-Math.ceil(plainText.length/3));
    middle = reverseText.replace(beginning, '').replace(end, '');

    //Orders the three parts based one the values of the random numbers from random()
    ((plainText.length == 1)
      ? order = plainText
      : (random1 > random2 && random2 > random3) 
      ? order = end.concat(middle).concat(beginning)
      : (random1 > random2 && random2 < random3 && random1 > random3) 
      ? order = middle.concat(end).concat(beginning)
      : (random1 < random2 && random2 > random3 && random1 > random3)
      ? order =  end.concat(beginning).concat(middle)
      : (random1 < random2 && random2 > random3 && random1 < random3)
      ? order = beginning.concat(end).concat(middle)
      : (random1 > random2 && random2 < random3 && random1 < random3)
      ? order =  middle.concat(beginning).concat(end)
      : (random1 < random2 && random2 < random3)
      ? order = beginning.concat(end).concat(middle)
      : order = end.concat(beginning).concat(middle)
    );
    
    let disorder = order.split(''); //Creates an array of the order variable
    let cipherText = '';
    
    for(let i = 0; i < disorder.length; i++) { //Loops through disorder and for each character, assigns the encrypted character to cipherText

      ((disorder[i] == ' ') ? cipherText += 'Ξ'
        : (disorder[i] == '1') ? cipherText += '@' : (disorder[i] == '2') ? cipherText += 'ͷ'
        : (disorder[i] == '3') ? cipherText += 'ᾮ' : (disorder[i] == '4') ? cipherText += 'ꬩ'
        : (disorder[i] == '5') ? cipherText += '᎒' : (disorder[i] == '6') ? cipherText += '‼'
        : (disorder[i] == '7') ? cipherText += '⁈' : (disorder[i] == '8') ? cipherText += 'Ѡ'
        : (disorder[i] == '9') ? cipherText += '⑫' : (disorder[i] == '0') ? cipherText += '҉'
        : (disorder[i] == '!') ? cipherText += 'ɇ' : (disorder[i] == '@') ? cipherText += '0' 
        : (disorder[i] == '#') ? cipherText += '8' : (disorder[i] == '$') ? cipherText += '₪'
        : (disorder[i] == '%') ? cipherText += '4' : (disorder[i] == '^') ? cipherText += '6'
        : (disorder[i] == '&') ? cipherText += '9' : (disorder[i] == '*') ? cipherText += '1'
        : (disorder[i] == '(') ? cipherText += '2' : (disorder[i] == ')') ? cipherText += 'ﾈ'
        : (disorder[i] == '_') ? cipherText += ')' : (disorder[i] == '-') ? cipherText += '('
        : (disorder[i] == '=') ? cipherText += 'σ' : (disorder[i] == '+') ? cipherText += '&'
        : (disorder[i] == "'") ? cipherText += 'r' : (disorder[i] == '"') ? cipherText += '*'
        : (disorder[i] == ';') ? cipherText += '$' : (disorder[i] == ':') ? cipherText += 'T'
        : (disorder[i] == '.') ? cipherText += '^' : (disorder[i] == ',') ? cipherText += '?'
        : (disorder[i] == '>') ? cipherText += 'S' : (disorder[i] == '<') ? cipherText += 'l'
        : (disorder[i] == '?') ? cipherText += '}' : (disorder[i] == '[') ? cipherText += '|'
        : (disorder[i] == ']') ? cipherText += 'q' : (disorder[i] == '}') ? cipherText += 'F'
        : (disorder[i] == '{') ? cipherText += 'N' : (disorder[i] == '`') ? cipherText += 'ഉ' 
        : (disorder[i] == '~') ? cipherText += 'R' : (disorder[i] == '|') ? cipherText += 'a'
        : (disorder[i] == 'a') ? cipherText += 'X' : (disorder[i] == 'b') ? cipherText += '╳'
        : (disorder[i] == 'c') ? cipherText += '‡' : (disorder[i] == 'd') ? cipherText += 'ℍ'
        : (disorder[i] == 'e') ? cipherText += '∰' : (disorder[i] == 'f') ? cipherText += 'ↂ'
        : (disorder[i] == 'g') ? cipherText += '◎' : (disorder[i] == 'h') ? cipherText += '⛔'
        : (disorder[i] == 'i') ? cipherText += 'ക' : (disorder[i] == 'j') ? cipherText += 'ↆ'
        : (disorder[i] == 'k') ? cipherText += '高' : (disorder[i] == 'l') ? cipherText += '╯'
        : (disorder[i] == 'm') ? cipherText += 'ﬗ' : (disorder[i] == 'n') ? cipherText += '≋'
        : (disorder[i] == 'o') ? cipherText += '→' : (disorder[i] == 'p') ? cipherText += '⚡'
        : (disorder[i] == 'q') ? cipherText += '⎳' : (disorder[i] == 'r') ? cipherText += '▓'
        : (disorder[i] == 's') ? cipherText += '⌛' : (disorder[i] == 't') ? cipherText += 'Ͳ'
        : (disorder[i] == 'u') ? cipherText += '▛' : (disorder[i] == 'v') ? cipherText += '◪'
        : (disorder[i] == 'w') ? cipherText += 'ɀ' : (disorder[i] == 'x') ? cipherText += '☹' 
        : (disorder[i] == 'y') ? cipherText += '♪' : (disorder[i] == 'z') ? cipherText += '⒵' 
        : (disorder[i] == 'A') ? cipherText += '☢' : (disorder[i] == 'B') ? cipherText += 'z' 
        : (disorder[i] == 'C') ? cipherText += 'Й' : (disorder[i] == 'D') ? cipherText += '∎'
        : (disorder[i] == 'E') ? cipherText += 'Ж' : (disorder[i] == 'F') ? cipherText += '®'
        : (disorder[i] == 'G') ? cipherText += '©' : (disorder[i] == 'H') ? cipherText += '¶'
        : (disorder[i] == 'I') ? cipherText += 'þ' : (disorder[i] == 'J') ? cipherText += 'æ' 
        : (disorder[i] == 'K') ? cipherText += 'Ð' : (disorder[i] == 'L') ? cipherText += '½'
        : (disorder[i] == 'M') ? cipherText += '¢' : (disorder[i] == 'N') ? cipherText += 'ހ'
        : (disorder[i] == 'O') ? cipherText += 'ﻊ' : (disorder[i] == 'P') ? cipherText += 'ຣ'
        : (disorder[i] == 'Q') ? cipherText += 'ວ' : (disorder[i] == 'R') ? cipherText += 'ﺾ'
        : (disorder[i] == 'S') ? cipherText += 'Ꮂ' : (disorder[i] == 'T') ? cipherText += 'ઊ'
        : (disorder[i] == 'U') ? cipherText += 'Δ' : (disorder[i] == 'V') ? cipherText += 'ӻ'
        : (disorder[i] == 'W') ? cipherText += 'ӿ' : (disorder[i] == 'X') ? cipherText += 'Ф'
        : (disorder[i] == 'Y') ? cipherText += 'Ѫ' : (disorder[i] == 'Z') ? cipherText += 'Ƶ'
        : cipherText += disorder[i]
      )

      cipherText2 = cipherText //Assigns the global variable, cipherText2, the value of cipherText

    }
      
    document.getElementById("answer-box").innerHTML = cipherText; //Outputs the encrypted message to 'answer-box'

  }
  
}

// Text Decryption Function
function decrypt() {
  /* 
  decrypt() takes the users encryted message, decrypts it,  
  and outputs their original message to the answer-box 
  */

  let disorder = ''; //Declaring an empty string variable
  
  for(let i = 0; i < cipherText2.length; i++) {  //Loops through cipherText2 and for each character, assigns the decrypted character to disorder
 
    ((cipherText2[i] == 'Ξ') ? disorder += ' '
      : (cipherText2[i] == '@') ? disorder += '1' : (cipherText2[i] == 'ͷ') ? disorder += '2'
      : (cipherText2[i] == 'ᾮ') ? disorder += '3' : (cipherText2[i] == 'ꬩ') ? disorder += '4'
      : (cipherText2[i] == '᎒') ? disorder += '5' : (cipherText2[i] == '‼') ? disorder += '6'
      : (cipherText2[i] == '⁈') ? disorder += '7' : (cipherText2[i] == 'Ѡ') ? disorder += '8'
      : (cipherText2[i] == '⑫') ? disorder += '9' : (cipherText2[i] == '҉') ? disorder += '0'
      : (cipherText2[i] == 'ɇ') ? disorder += '!' : (cipherText2[i] == '0') ? disorder += '@'
      : (cipherText2[i] == '8') ? disorder += '#' : (cipherText2[i] == '₪') ? disorder += '$'
      : (cipherText2[i] == '4') ? disorder += '%' : (cipherText2[i] == '6') ? disorder += '^'
      : (cipherText2[i] == '9') ? disorder += '&' : (cipherText2[i] == '1') ? disorder += '*'
      : (cipherText2[i] == '2') ? disorder += '(' : (cipherText2[i] == 'ﾈ') ? disorder += ')'
      : (cipherText2[i] == ')') ? disorder += '_' : (cipherText2[i] == '(') ? disorder += '-'
      : (cipherText2[i] == 'σ') ? disorder += '=' : (cipherText2[i] == '&') ? disorder += '+'
      : (cipherText2[i] == 'r') ? disorder += "'" : (cipherText2[i] == '*') ? disorder += '"'
      : (cipherText2[i] == '$') ? disorder += ';' : (cipherText2[i] == 'T') ? disorder += ':'
      : (cipherText2[i] == '^') ? disorder += '.' : (cipherText2[i] == '?') ? disorder += ','
      : (cipherText2[i] == 'S') ? disorder += '>' : (cipherText2[i] == 'l') ? disorder += '<'
      : (cipherText2[i] == '}') ? disorder += '?' : (cipherText2[i] == '|') ? disorder += '['
      : (cipherText2[i] == 'q') ? disorder += ']' : (cipherText2[i] == 'F') ? disorder += '}'
      : (cipherText2[i] == 'N') ? disorder += '{' : (cipherText2[i] == 'ഉ') ? disorder += '`'
      : (cipherText2[i] == 'R') ? disorder += '~' : (cipherText2[i] == 'a') ? disorder += '|'
      : (cipherText2[i] == 'X') ? disorder += 'a' : (cipherText2[i] == '╳') ? disorder += 'b'
      : (cipherText2[i] == '‡') ? disorder += 'c' : (cipherText2[i] == 'ℍ') ? disorder += 'd'
      : (cipherText2[i] == '∰') ? disorder += 'e' : (cipherText2[i] == 'ↂ') ? disorder += 'f'
      : (cipherText2[i] == '◎') ? disorder += 'g': (cipherText2[i] == '⛔') ? disorder += 'h'
      : (cipherText2[i] == 'ക') ? disorder += 'i' : (cipherText2[i] == 'ↆ') ? disorder += 'j'
      : (cipherText2[i] == '高') ? disorder += 'k' : (cipherText2[i] == '╯') ? disorder += 'l'
      : (cipherText2[i] == 'ﬗ') ? disorder += 'm' : (cipherText2[i] == '≋') ? disorder += 'n'
      : (cipherText2[i] == '→') ? disorder += 'o' : (cipherText2[i] == '⚡') ? disorder += 'p'
      : (cipherText2[i] == '⎳') ? disorder += 'q' : (cipherText2[i] == '▓') ? disorder += 'r'
      : (cipherText2[i] == '⌛') ? disorder += 's' : (cipherText2[i] == 'Ͳ') ? disorder += 't'
      : (cipherText2[i] == '▛') ? disorder += 'u' : (cipherText2[i] == '◪') ? disorder += 'v'
      : (cipherText2[i] == 'ɀ') ? disorder += 'w' : (cipherText2[i] == '☹') ? disorder += 'x' 
      : (cipherText2[i] == '♪') ? disorder += 'y' : (cipherText2[i] == '⒵') ? disorder += 'z'
      : (cipherText2[i] == '☢') ? disorder += 'A' : (cipherText2[i] == 'z')  ? disorder += 'B'
      : (cipherText2[i] == 'Й') ? disorder += 'C' : (cipherText2[i] == '∎') ? disorder += 'D'
      : (cipherText2[i] == 'Ж') ? disorder += 'E' : (cipherText2[i] == '®') ? disorder += 'F'
      : (cipherText2[i] == '©') ? disorder += 'G' : (cipherText2[i] == '¶') ? disorder += 'H'
      : (cipherText2[i] == 'þ') ? disorder += 'I' : (cipherText2[i] == 'æ') ? disorder += 'J'
      : (cipherText2[i] == 'Ð') ? disorder += 'K' : (cipherText2[i] == '½') ? disorder += 'L' 
      : (cipherText2[i] == '¢') ? disorder += 'M' : (cipherText2[i] == 'ހ') ? disorder += 'N' 
      : (cipherText2[i] == 'ﻊ') ? disorder += 'O' : (cipherText2[i] == 'ຣ') ? disorder += 'P' 
      : (cipherText2[i] == 'ວ') ? disorder += 'Q' : (cipherText2[i] == 'ﺾ') ? disorder += 'R' 
      : (cipherText2[i] == 'Ꮂ') ? disorder += 'S' : (cipherText2[i] == 'ઊ') ? disorder += 'T' 
      : (cipherText2[i] == 'Δ') ? disorder += 'U' : (cipherText2[i] == 'ӻ') ? disorder += 'V' 
      : (cipherText2[i] == 'ӿ') ? disorder += 'W' : (cipherText2[i] == 'Ф') ? disorder += 'X' 
      : (cipherText2[i] == 'Ѫ') ? disorder += 'Y' : (cipherText2[i] == 'Ƶ') ? disorder += 'Z' 
      : disorder += cipherText2[i]
    )
    
  }

  if (disorder.length == 1){ //If only 1 characer was initially input

    document.getElementById("answer-box").innerHTML = disorder

  } else { //If multiple characters were initially input

      reverseText = beginning.concat(middle).concat(end) //Puts message reversed order
      
      let plainText = '';

      for(let i = reverseText.length - 1; i > - 1; i--) { //Reverses the reversed message 
        plainText += reverseText[i]
      }
      
      document.getElementById("answer-box").innerHTML = plainText; //Outputs the decrypted message to 'answer-box'

  } 
  
}