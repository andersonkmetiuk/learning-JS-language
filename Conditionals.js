//examples of conditionals
var answer = true;
//if
if (answer === true) {
  console.log("You said true!");
} else {
  console.log("You said false!");
}

//else if
if (answer === "YES") {
  console.log("Yes!");
} else if (answer === "NO") {
  console.log("No!");
} else {
  console.log("Okay then");
}

//switch case
switch (answer) {
  case "YES":
    console.log("Yes!");
    break;
  case "NO":
    console.log("No!");
    break;
  default:
    console.log("Okay then");
    break;
}
