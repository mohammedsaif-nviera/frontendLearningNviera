// Character Sets

/*
[a-z] checks small alphabets 
[a-zA-Z] checks all alphabets
[a-zA-Z0-9] checks alphaNumeric
[aty] checks if a or t or y is presents
[^aty] cheks all exceppt for a/t/y (not aty)
*/

/*
Quantifiers -> To have specific counts
Sa{2}if
Sa{0,3}if -> could have 0 to 3 characters not more than that
(Sai){2}f   -> To have multi chars as counts
*/

let regExChararacterSet = /S[a-z]if/;
let regExSpecificChars = /S[iuo]if/;
let regExcludeSpecificChars = /S[^iyo]if/;
let regExCount = /Sa{2}if/;
let regExCounting = /Sa{0,2}if/;
let regExCountingMulti = /(Sa){2}if/;

const sentence = "Saif is Here";

if (regExChararacterSet.test(sentence)) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
if (regExSpecificChars.test(sentence)) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
if (regExcludeSpecificChars.test(sentence)) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
if (regExCount.test(sentence)) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
if (regExCounting.test(sentence)) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
if (regExCountingMulti.test(sentence)) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
