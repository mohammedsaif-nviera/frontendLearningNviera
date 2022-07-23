/*
For Each
Filter
Map
Sort
Reduce
*/

const companies = [
  { name: "Google", category: "Product", start: 1980, end: 2000 },
  { name: "Microsoft", category: "Product", start: 1992, end: 2000 },
  { name: "Amazon", category: "Product", starProductt: 1960, end: 2100 },
  { name: "Flipkart", category: "Product", start: 1990, end: 2010 },
];

// For Each
companies.forEach(function (company, index) {
  console.log(company.name, index);
});

// map
companies.map(function (company) {
  console.log(company.name);
});

console.log("\nAdding Another Item to array");
let obj = {
  name: "",
  category: "",
  start: 0,
  end: 0,
};



const [item, setItem] = useState([])


setItem([...item, {name:'ss', id:'dd'}])

let tempArr = item
tempArr.push({d})
setItem(tempArr)