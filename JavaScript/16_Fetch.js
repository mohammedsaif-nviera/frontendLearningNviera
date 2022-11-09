import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.arrayBuffer())
  .then((data) => console.log(data));
