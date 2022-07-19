// To Set Local Storage or Browser Storage
localStorage.setItem("Name", "MohammedSaif");
localStorage.setItem("Company", "NvieraTechnology");

// To Get Local Storage or Browser Storage data
let name1 = localStorage.getItem("Name");
let company = localStorage.getItem("Company");
console.log(name1);

// To clear entire local storage
localStorage.clear();

// To remove single item from local storage
localStorage.removeItem("Name");

// To store Array in local storage
let arr2 = [34, 65, 78, 100];
localStorage.setItem("callingArray", JSON.stringify(arr2));

// To Retrieve Array from local storage
let array1 = JSON.parse(localStorage.getItem("callingArray"));
console.log(array1);
