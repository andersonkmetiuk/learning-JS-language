//For Sequential
console.log("For Sequential");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//For Enumerative - Arrays
console.log("\nFor Enumerative");
var pageNames = ["Home", "About Us", "Contact Us", "News", "Blog"];

console.log("\nin");
for (var p in pageNames) {
  console.log(p, pageNames[p]);
}

console.log("\nof");
for (var v of pageNames) {
  console.log(v);
}

/* *** Newer Loopable data types ***
 - Sets -
 * They are like arrays, but they store each value exactly and only once
 * They must be accessed and changed using special methods

 - Maps -
 * They preserve the order of keys
 * For loops are predictable
 * Must be accessed and change using special methods
 */
console.log("\nSets and Maps \n\nSets");
//This array has two copies of its first item
let myList = [1, 1, 2, 3, 5, 8, 13, "fibonacci"];
console.log("myList = ", myList);

//The same thing using the Set API
let mySet = new Set();
mySet.add(1);
mySet.add(1); //this won`t change mySet, since 1 is already in there
mySet.add(2);
mySet.add(3);
//...
console.log(mySet);
//An array can be turned into a set
//If you want to quickly remove all duplicates from an array, this is a good tool!
let removeDuplicates = new Set(myList);
console.log(removeDuplicates);

console.log(removeDuplicates.has(3)); //true
console.log(removeDuplicates.has(12)); //false

console.log("--For Loop--");
for (let item of removeDuplicates) console.log(item);

//Object
console.log("\nObjects");
let bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
};
console.log("bird = ", bird);
//Map with the same structure
var birdMap = new Map();
birdMap.set("genus", "corvus");
birdMap.set("species", "corvax");
birdMap.set("commonName", "raven");

console.log(birdMap);
console.log(birdMap.get("genus"));
console.log(birdMap.has("genus")); //true
console.log(birdMap.has("corvus")); //false (keys only)

console.log("--For Loop--");
for (let value of birdMap) console.log(value);

console.log("--Entries Method--\n", birdMap.entries());

//Easier way to create a map
birdMap2 = new Map(Object.entries(bird)); //copies the object bird inside the map
console.log("--Easier way!--\n", birdMap2);

//While
console.log("\nWhile Loops");
let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}
//do {} while (a<10);
