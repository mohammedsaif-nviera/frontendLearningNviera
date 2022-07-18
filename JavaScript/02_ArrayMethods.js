let marks = [45, 98, 90, 1234];
const fruits = ["orange", "banana", "apple"];
const mixedDataTypes = ["Saif", 90, [98, 12]];

// Another Way
const arr1 = new Array(23, 78, ["ios", 15]);
console.log(marks);
console.log(fruits);
console.log(mixedDataTypes);
console.log(arr1);

// Array Methods
console.log(arr1.length);
console.log(Array.isArray("kls"));

// Replacing Array Ele
console.log("First Element", arr1[0]);
arr1[0] = "0989i";
console.log("First Element", arr1[0]);

// To get the index of some element in array
let indexPos = fruits.indexOf("apple");
console.log("Apple is present in index", indexPos);

// Mutating/Modifying Arr

console.log(marks);
marks.push(98);
marks.push(435);
console.log(marks);
// Removes Last ele
marks.pop();
console.log(marks);
// Removes 1st ele
marks.shift();
console.log(marks);
// Removes multiple elements at a time
// Takes starting index and no.of elements to be deleted as params
marks.splice(1, 3);
console.log(marks);
// Reversing array
marks.push(90);
marks.push(12);
marks.push(43);
console.log(marks);
marks.reverse();
console.log(marks);
// Concatinating it will return the val
let marks2 = [56, 98, 65];
console.log(marks.concat(marks2));
marks = marks.concat(marks2);
console.log(marks);

// JavaScript Objects
let myObj = {
  name: "Harry",
  channel: "VillianBeast",
  cgpa: [8.8, 9.4, 10, 0, 8, 32],
};
console.log(myObj);
console.log(myObj["channel"]); // Accessing Individual object ele
