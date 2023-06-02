var emptyObject = {};
var notEmptyObject = {
  label: "value",
  label2: "value2",
};

console.log(emptyObject);
console.log(notEmptyObject);

//let != var
//let = local
//var = global
//Blocks = Structs in C
//similar to json files returned from APIs
let bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffsprint: 5,
  noisy: true,
  deadly: false,
};

let bear = {
  genus: "ursus",
  species: "arctos",
  commonName: "brown bear",
  callType: "roar",
  quote: "",
  maxOffsprint: 3,
  noisy: true,
  deadly: true,
};

const bookOfKnowledge = {
  "lunch time": "12:30 PM",
  "the ultimate answer": 42,
  bestSong: "Lonnie's Lament",
  earth: "Mostly harmless.",
};

console.log(bird);
console.log(bird.commonName);
console.log(bear);
console.log(bear.deadly);
console.log(bookOfKnowledge);
console.log(bookOfKnowledge["the ultimate answer"]);

//modify
bird.color = "black";
bird["where it lives"] = "in a tree";
console.log(bird.color);
console.log(bird["where it lives"]);

delete bird.color; //deles a property

/*References
When you type */
console.log("\nreferences");
let bird2 = bird;
/*you are creating a reference pointing to the same location in memory
if you try to change a value in bird2 it will also change in the original
let`s see*/
bird2.genus = "ursus";
console.log("Bird (Reference)");
console.log(bird);

bird.genus = "corvus";
console.log("Bird2 (Reference)");
console.log(bird2);

// to create a real copy you need to use this instead
bird2 = Object.assign({}, bird);
//with the spread operator as well (...)
bird2 = { ...bird };
/*both line 72 and 74 are equal
finally another way is this one:
JSON = JavaScript Object Notation */
bird2 = JSON.parse(JSON.stringify(bird));

bird2.genus = "ursus";
console.log("Bird (Copy)");
console.log(bird);
