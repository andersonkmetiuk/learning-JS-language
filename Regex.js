/*Regular Expressions
Ways of searching text for patterns
When you need to find something in a pattern
*/
var string1 = "This is the longest string ever";
var string2 = "This is the shortest string ever";
var string3 = "Number 42 fourty two";
var string4 = "The payment you need to make is $520.25 to your vendor";
var string5 =
  "The payment you need to make is $520049354.2532754 to your vendor";

var regex = /longest/;
console.log(regex.test(string1));

console.log("\ncase sensitive");
var regex = /this/; //case sensitive
console.log(regex.test(string1));

console.log("\ncase insensitive");
var regex = /this/i; //case insensitive
console.log(regex.test(string1));

console.log("\nbeginning");
var regex = /^this/i; //beginning of the string
console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));

console.log("\nending");
var regex = /ever$/i; //ending of the string
console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));

var regex = /42/;
console.log(`Number string3 = ${regex.exec(string3)}`);

/* Find a specific word using Regex

The regex /^(\w+)\s(\w+)\s(\w+)$/ explains:

(i) a caret ( ^ ) is at the beginning of the entire regular expression, 
it matches the beginning of a line.
(ii) \w means Find a word character including _
(iii) + after \w means find a word character including _ 
that matches any string that contains at least one word character.
(iv) \s means Find a white space character.
(v) a dollar sign ( $ ) is at the end of the entire regular expression, 
it matches the end of a line. */

//any digit \d and '+' for other digits
var regexNumber = /\d+/;
console.log(`Number string3 = ${regexNumber.exec(string3)}`);

//extracts $value1.value2 with any size
var regexPayment = /[$][0-9]+[.][0-9]+/;
console.log(`Number string4 = ${regexPayment.exec(string4)}`);
console.log(`Number string5 = ${regexPayment.exec(string5)}`);
