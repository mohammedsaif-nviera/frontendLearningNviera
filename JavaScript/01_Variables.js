/*
Programming Case Types
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/

const a = "Mohammed Saif";
var b = 123;
let _c = 34.321;

const $company = "Nviera";
const company1 = "Nviera";

console.log(a);
console.log("Integers", b);
console.log("Float", _c);
console.log("Software Engineer at", $company);
console.log(`Software Engineer at ${company1} using BackTicks and Dollar Sign`);

/*
Rules for creating JavaScript
1. Can't start with Number
2. Can Start with Letters, Numbers, underscrore( _ ) or $
3. Case Senstitive
*/

// Cant't change values in const Keyword
// Always Initialize const variable dont leave it undefined
// const val ; This will throw an error
// Instead use it as below
const val = 0;

// Let has Block level scope
let city = "Hyderabad";
{
  let city = "Bangalore";
  console.log("Printing inside Block", city);
}
console.log("Printing Outside Block", city);

// Can Inc/Dec the values in const keyword for arrays
// But Can't re-initialize the array
const arr1 = [34, 56, 78];
console.log("Initital Array using const", arr1);
arr1.push(98);
console.log("Adding element in array initialized with const keyword", arr1);
// Throws error as we cant re initialize the array
// arr1 = [90, 78, 9];
// console.log(arr1);
