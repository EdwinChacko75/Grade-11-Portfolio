// function welcome() {​​
//     let username = prompt("What is your name?");    
//     alert("Welcome to my website " + username)
//     document.getElementById("saywelcome").innerHTML = message; 
// }​​

function lights(){
    let color = prompt("What color is the light now?");

    if (color === "red") {
        console.log("STOP!");
    }
    else if (color === "green")
        console.log("GO!");

    else if (color === "yellow") {
        console.log("Stop if it is safe to do so");
    }
    else if (color === "amber") {
        console.log("Stop if it is safe to do so")
    }
    else {
        console.log("Invalid Input")
    }
}

lights();