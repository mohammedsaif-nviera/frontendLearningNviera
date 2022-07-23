arr = [
  {
    newtask: "ABC",
  },
  {
    newtask: "DEF",
  },
  {
    newtask: "EGHI",
  },
];
// arr.map((task) => {
//   if (task.newtask.includes("DEF")) {
//     console.log("Already added to task list");
//   } else {
//     console.log("Not there");
//   }
// });

obj = {
  newtask: "ABC",
};
console.log(arr[0].newtask.includes(obj.newtask));
console.log(arr[0].newtask.includes(obj.newtask));

const products = [
  { name: "Laptop", price: 32000, brand: "Lenovo", color: "Silver" },
  { name: "Phone", price: 700, brand: "Iphone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Aunglass", price: 300, brand: "Ribon", color: "Blue" },
  { name: "Camera", price: 9000, brand: "Lenovo", color: "Gray" },
];
if (products.find((product) => product.price === 91000)) {
  console.log("Product Found");
} else {
  console.log("No products found");
}
console.log(products.find((product) => product.price === 9000));
