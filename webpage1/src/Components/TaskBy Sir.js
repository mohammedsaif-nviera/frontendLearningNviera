import React, { useState } from "react";
import "./NewTask.css";
function TaskBySir() {
  const [task, setTask] = useState({ taskname: "learning" });
  const [taskList, setTasklist] = useState([]);
  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setTask([...task, { name: value }]);
  };
  const handleSubmit = () => {
    setTasklist([...taskList, task]);
    setTask(null);
  };
  return (
    <>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <input
        name="taskname"
        type="text"
        placeholder="Add a new task..."
        className="inputText"
        onChange={handlechange}
      />
      <button onClick={handleSubmit}>Add Note</button>
    </>
  );
}

export default TaskBySir;
