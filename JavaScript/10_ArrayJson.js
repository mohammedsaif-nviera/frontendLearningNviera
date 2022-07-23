arr = [];

obj = {
  name1: "ABCD",
  user: 1,
};
obj1 = {
  name1: "CDE2",
  user: 1,
};

arr.push(obj);
arr.push(obj1);

arr.map(function (obj) {
  console.log(obj.name1);
});

var name3 = "Kuldeep";
var user3 = 3;
