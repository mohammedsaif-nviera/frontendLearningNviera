import React, { useState } from "react";
import "./NewTask.css";
import Tasks from "./Tasks";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const NewTask = () => {
  let [task, setTask] = useState({ newtask: "" });
  let [taskList, setTaskList] = useState([]);

  let handleChange = (e) => {
    var value = e.target.value;
    let name1 = e.target.name;
    console.log(name1);
    setTask({ [name1]: value });
    console.log(value);
  };

  let handleSubmit = () => {
    if (task.newtask === "") {
      alert("Please enter a task");
    } else {
      if (taskList.length === 0) {
        setTaskList([...taskList, task]);
        setTask({ newtask: "" });
        console.log(taskList);
      } else {
        if (
          taskList.find(
            (taskIteration) => taskIteration.newtask === task.newtask
          )
        ) {
          alert("Task already exists");
          setTask({ newtask: "" });
        } else {
          setTaskList([...taskList, task]);
          setTask({ newtask: "" });
        }
      }
    }
  };

  let handleDelete = (taskDelete) => {
    let deletedArray = taskList.filter((task) => task.newtask !== taskDelete);
    setTaskList([...taskList, deletedArray]);
  };

  let handleEdit = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Add a New Task"
        className="inputText"
        name="newtask"
        value={task?.newtask}
        onChange={handleChange}
      />
      <button className="submitButton" onClick={handleSubmit}>
        Add Task
      </button>

      {taskList.length > 0
        ? taskList.map((item, index) => (
            // <div className="flexContainer" key={index}>
            //   <div className="flexItem1 item">
            //     <input
            //       type="checkbox"
            //       name="task1"
            //       id="task1"
            //       className="checkbox1"
            //     />
            //   </div>
            //   <div className="flexItem2 item ">
            //     <div className="heading">{item.newtask}</div>

            //     <div className="description">Lorem ipsum dolor, sit amet</div>
            //     <div className="modifying">
            //       <button className="editButton" onClick={handleEdit}>
            //         <FaEdit />
            //       </button>
            //       <button
            //         className="deleteButton"
            //         onClick={handleDelete(item.newtask)}
            //       >
            //         <AiFillDelete />
            //       </button>
            //     </div>
            //   </div>
            // </div>
            <Tasks notes={item.newtask} />
          ))
        : ""}
    </div>
  );
};

export default NewTask;
