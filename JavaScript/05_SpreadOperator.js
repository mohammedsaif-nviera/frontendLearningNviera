/*
Spread operator allows an iterable to expand in places where 0+ arguments are expected . 
It's mostly used in variable array where there is mkore than 1 values are expected.
It allows us the privilege to obtain a list of parameters from an array. 
*/
function sum(a, b, c) {
  console.log(a + b + c);
}

sum(12, 34, 90);

// If passing arrray to params of function
let arr = [90, 78, 90];
sum(...arr);

let arr1 = [12, 13, 14];
let arr2 = [15, 16, 17];
console.log(arr1);
console.log(arr2);
arr1 = arr1.concat(arr2);
console.log(arr1);

//Concatenating Using Spread Operator
console.log("Using Spread Operator");
arr1 = [...arr1, ...arr2];
console.log(arr1);
let arr3 = [18, 19, 20];
arr1 = [...arr1, ...arr2, ...arr3];
console.log(arr1);

// Copying Array
let arrCopy1 = [1, 2, 3, 4, 5];
let arrCopy2 = arrCopy1;
console.log(arrCopy1);
console.log(arrCopy2);
// If we try to add element in 2nd array it will aslo make changes in arr1
arrCopy2.push(6, 7, 8, 10);
console.log(arrCopy2);
console.log(arrCopy1);
// But using Spread Operator it will make a copy instead of modifying main array
let arrc2 = [...arrCopy1];
console.log("Using Spread Operator for copying");
console.log(arrCopy1);
console.log(arrc2);
arrc2.push(7, 8, 9, 10);
console.log(arrCopy1);
console.log(arrc2);
