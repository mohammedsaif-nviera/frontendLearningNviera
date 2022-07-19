/*
^ -> Start With
$ -> Ends with
. -> Matches any 1 char
* -> Matches 0 or more characters
? -> The prev char is Optional 

Use \ (backslash) to match exact character
Ex: /sa\*if/ 
Checking for sa*if
 */

let senetence = "Saif is from Preidency Uiversity";
let regEx = /^Saif/;
let regExEnd = /Saif$/;
let regExSingleChar = /S.if/;
let regExMultiChar = /S*f/;
let regExOptional = /S?aif/;

let res = regEx.exec(senetence);
console.log(res);

res = regExEnd.exec(senetence);
console.log(res);

res = regExSingleChar.exec(senetence);
console.log(res);

res = regExMultiChar.exec(senetence);
console.log(res);

res = regExOptional.exec(senetence);
console.log(res);
