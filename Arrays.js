//Creating various types of arrays
console.log("\tTypes of Arrays");
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday"];
console.log(daysOfTheWeek);

var myList = [0, 1, 2, "string", "word", "hello", true, false];
console.log(myList);

//Arrays can contain objects and arrays inside like this
var listOfStuff = [{ name: "value" }, [1, 2, 3], true, "hello"];
console.log(listOfStuff);
console.log(listOfStuff.length);

//Manipulating arrays
console.log("\n\tManipulating arrays");
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[3]);

myList[0] = 22;
console.log(myList);

daysOfTheWeek[daysOfTheWeek.length] = "Thursday";
daysOfTheWeek.push("Friday");
console.log(daysOfTheWeek);
console.log(daysOfTheWeek.pop());

//delete terms in the middle of the array
delete myList[3]; //empty term
console.log(myList);
console.log(myList.length);
myList.splice(3, 1); //param(pos, how many)
console.log(myList);
console.log(myList.length);
