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
