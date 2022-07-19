/*
1. For Loop
2. While Loop
3. Do-While
4. For Each Loop
*/

for (let index = 0; index < 10; index++) {
  console.log(index);
}

console.log("\nWhile Loop");

index = 5;
while (index < 10) {
  console.log(index);
  index++;
}

console.log("Do While Loop");
// This will run atleast once
k = 1;
do {
  console.log(`Printing ${k}`);
  k++;
} while (k < 5);

// Break out of loop
// Continue -> Skips Current iteration and moves to next iteration

// Continue and break out of loop
i = 1;
console.log("Printing Continue and Break Out");
while (i < 10) {
  if (i === 5) {
    console.log("Printing Continue");
    i++;
    continue;
  }
  if (i === 8) {
    console.log("Breaking the Lopop");
    i++;
    break;
  }
  console.log(i);
  i++;
}

// For Each Element Loop
let arr = [56, 76, 89, 12, 43, 54];
arr.forEach((element) => {
  console.log(element);
});

arr.forEach(function (element, index, arr) {
  console.log(element, index, arr);
});

let obj = {
  name: "Mohammed Saif",
  company: "Nviera Technologies",
};

for (const iterator in obj) {
  console.log(iterator, obj[iterator]);
}
