import React, { useEffect, useState } from "react";
import axios from "axios";
const UseEffectExample = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
    //   .then(() => console.log(data[0].title));
  });

  return (
    <div>
      <h1>Implementing UseEffect</h1>
      {data.map((task) => (
        <span>{task.title}</span>
      ))}
    </div>
  );
};

export default UseEffectExample;
