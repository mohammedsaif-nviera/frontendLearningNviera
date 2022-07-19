const age = 90;
// == checks only value
// === checks both value and datatype
if (age < 50) {
  console.log("Less than 50 years old");
} else if (age > 50) {
  console.log("More than 50 years old");
} else {
  console.log("50 years old");
}

// Checking if the variable exists
if (typeof variable == "undefined") {
  console.log("Variable Not Present");
}

// For Boolean we can directly check if the variable  exists(true)
var isBoolean = false;
if (isBoolean) {
  console.log("True Variable");
} else {
  console.log("False Variable");
}

// && And Operator
// || Or Operator

// Ternary Operator
console.log(age == 50 ? "Less than 50 years old" : "More than 50 years old");

// Switch Statements
switch (age) {
  case 18:
    console.log("Age is 18");
    break;
  case 36:
    console.log("Age is 36");
    break;
  default:
    console.log("Age is", age);
    break;
}
