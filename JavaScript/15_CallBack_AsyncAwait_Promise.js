const datas = [
  { name: "Saif", age: 12 },
  { name: "Akbar", age: 92 },
];

function getDatas() {
  setTimeout(function () {
    let output = "";
    datas.forEach((item) => {
      output += `<li>${item.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Call after 2 seconds and hence not getting op
function createUser(data) {
  setTimeout(function () {
    datas.push(data);
  }, 2000);
}

// // Using Callback Function
function createUser(data, callback) {
  setTimeout(function () {
    datas.push(data);
    // Callback after the task is done
    callback();
  }, 2000);
}

// Using Promise
function createUser(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      datas.push(data);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Daya Kuch toh Gadbad hai");
      }
    }, 2000);
  });
}

// Normal Calling
createUser({ name: "Yusuf", age: 90 }, getDatas);
getDatas()

console.log(getDatas);

// Using Callback Functiony
createUser({ name: "Yusuf", age: 90 }, getDatas);

// Using Promise Instead
createUser({ name: "Yusuf", age: 90 }, getDatas)
  .then(getDatas)
  .catch(function (err) {
    console.log(err);
  });

// Using Async Await

async function start() {
  await createUser({ name: "Yusuf", age: 90 }, getDatas);
  getDatas();
}
start();
