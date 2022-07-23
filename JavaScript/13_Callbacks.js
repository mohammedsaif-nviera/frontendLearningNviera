const addNumber = (a, b, c) => {
  return new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
      resolve(a + b + c);
    } else {
      reject("Error Occured");
    }
  });
};

function printRes(res) {
  return res;
}
addNumber(3, 34, 5)
  .then((printRes) => {
    console.log(printRes);
  })
  .catch(() => console.log("OOPS"));
