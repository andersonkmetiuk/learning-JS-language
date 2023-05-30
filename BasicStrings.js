var myString = "This is my string";

//Method that converts strings to uppercase (method)
console.log(myString.toUpperCase());

//Return string size (property)
console.log(myString.length);

//Shows variable value
console.log(`This is the size of the string: ${myString.length}`);

//Note: the syntax needs ` `. Let`s see the differences
console.log("This is the size of the string: ${myString.length}");
console.log("This is the size of the string: ${myString.length}");
console.log(`This is the size of the string: "${myString.length}"`);

//tip: if you want to write a string inside of a string you need to use \"
//Example: "This is a \"short\" string"
