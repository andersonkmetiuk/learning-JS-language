//---FUNCTIONS---
function hello() {
  console.log("Hello");
  console.log("How are you?");
  return;
}
function receiveText(arg1, arg2, arg3) {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
}
function onlyStrings(str1) {
  if (typeof str1 !== "string") {
    console.error("Error! Enter a string, please");
    return;
  }
  str1 = str1.replace(/r/g, "w"); //replace r for w, g means global (all r`s for w`s)
  str1 = str1.replace(/R/g, "W"); //replace R for W
  console.log("Success");
  return str1;
}
//a function with a default value argument
function sayTimes(phrase = "Empty Phrase", times = 3) {
  for (var i = 0; i < times; i++) console.log(phrase + "(" + i + ")");
}
//function with no arguments. They always receive an array called "arguments" that you can use
function addingMachine() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    var number = arguments[i];
    //if its a number sum with the total
    if (typeof number === "number") {
      total += number;
    }
  }
  return total;
}

//function that receives an object
//This function changes the original object
function transmogrifier(calvin) {
  if (typeof calvin !== "object") {
    console.error("Calvin is not an object");
    return;
  }
  //generate a random number between 1 and 5
  var randomNumber = Math.floor(Math.random() * 5) + 1; //math floor rounds the number, the random number is a decimal between 0 and 1

  switch (randomNumber) {
    case 1:
      calvin.form = "tyrannosaurus";
      break;
    case 2:
      calvin.form = "grey wolf";
      break;
    case 3:
      calvin.form = "bengal tiger";
      break;
    case 4:
      calvin.form = "grizzly bear";
      break;
    case 5:
      calvin.form = "canary";
      break;
    default:
      //he stays human
      calvin.form = "human boy";
      break;
    //there`s no return here because we are using the reference to change the object
  }
}
//This version of the function does not change the original object
function transmogrifierCopy(calvin) {
  if (typeof calvin !== "object") {
    console.error("Calvin is not an object");
    return;
  }
  //generate a random number between 1 and 5
  var randomNumber = Math.floor(Math.random() * 5) + 1; //math floor rounds the number, the random number is a decimal between 0 and 1

  /* ---THIS LINE IS DIFFERENT --- */
  var newForm = calvin.form;
  switch (randomNumber) {
    case 1:
      newForm = "tyrannosaurus";
      break;
    case 2:
      newForm = "grey wolf";
      break;
    case 3:
      newForm = "bengal tiger";
      break;
    case 4:
      newForm = "grizzly bear";
      break;
    case 5:
      newForm = "canary";
      break;
    default:
      //he stays human
      newForm = "human boy";
      break;
  }
  //---THIS LINE TOO---
  //return a new object that is a copy
  return {
    name: calvin.name,
    bestFriend: calvin.bestFriend,
    form: newForm,
  };
}
//---VARIABLES---
var calvin = {
  name: "Calvin",
  bestFriend: "Hobbes",
  form: "human boy",
};
var newCalvin = {
  name: "Calvin",
  bestFriend: "Hobbes",
  form: "human boy",
};

//---OUTPUTS---
console.log("Functions");

console.log("\nHello Function:");
hello();

console.log("\nReceive Text Function:");
receiveText("hey", "testing", "Again!");

console.log("\nOnly Strings Function:");
console.log(onlyStrings(1));
console.log(onlyStrings("Hello, how are you doing?"));

console.log("\nSay Times Function:");
sayTimes("Hey");
sayTimes();
sayTimes("I`m here", 7);

console.log("\nAdding Machine Function:");
console.log("Sum = " + addingMachine());
console.log("Sum = " + addingMachine(1, 3, 5, 4.5, "hello"));

console.log("\nTransmogrifier Function:");
console.log("Calvin before\n", calvin);
transmogrifier(calvin);
console.log("Calvin after\n", calvin);
console.log("Transmogrifier Copy Function:");
console.log("Copy\n", transmogrifierCopy(newCalvin));
console.log("Original\n", newCalvin);
