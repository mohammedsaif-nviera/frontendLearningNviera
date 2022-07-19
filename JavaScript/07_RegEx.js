// Regular Expression Literal
let reg = /Saif/;
let regEx = /Saif/g; // To check the literal globally for all occurrences
let regExCI = /Saif/i; // To check the literal with case insensitive matching
console.log(reg);
console.log(reg.source);

// Functions to match Expressions
let sentence = "My name is Mohammed Saif saif sAif";
/*
1. exec() -> This function will return an array for match or null for no match
*/
let result = regEx.exec(sentence);
console.log(result);
// We can use multiple exec with global(g) flag
let result1 = regEx.exec(sentence);
console.log(result1);
let resI = regExCI.exec(sentence);
console.log(resI);

/*
 2. test() -> Returns Ture/False
 */
regExTrue = /Priyank/;
let result2 = regExTrue.test(sentence);
console.log(result2);

/*
3. match() -> Returns an array of results or null. Used for strings
 */
// let result3 = regEx.match(sentence); Wrong Query
let result3 = sentence.match(regExCI);
console.log(result3);

/*
4. search() -> Returns index of first match else -1
*/
let resIndex = sentence.search(regEx);
console.log(resIndex);

/*
5. replace() -> Returns new replaced string with all the replacements, if no flag is given first match will be replaced
*/

let regExreplace = /Saif/gi; // Giving both Flags
let res5 = sentence.replace(regExreplace, "VILLAIN");
console.log(res5);
