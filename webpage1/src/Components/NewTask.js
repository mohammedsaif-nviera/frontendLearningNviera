import React, { useState, useEffect } from "react";
import "./NewTask.css";
import Tasks from "./Tasks";
import axios from "axios";

const NewTask = () => {
  let [dataTask, setDataTask] = useState([]);
  let [task, setTask] = useState({ newtask: "" });
  let [taskList, setTaskList] = useState([]);
  const [isChecked, setisChecked] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        setDataTask(res.data);
        console.log(dataTask);
      })
      // .then(() => console.log(dataTask))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleChecked = (e) => {
    let checkedValue = e.target.checked;
    let name1 = e.target.name;
    // console.log("Direct", checkedValue);
    setisChecked(checkedValue);
    // console.log("Indirect", isChecked);
  };
  let handleChange = (e) => {
    var value = e.target.value;
    let name1 = e.target.name;
    // console.log(name1);
    setTask({ [name1]: value });
    // console.log(value);
  };

  let handleSubmit = () => {
    const api = "https://jsonplaceholder.typicode.com/todos";
    axios
      .post(api, { title: task.newtask, completed: isChecked })
      .then((response) => {
        let myData = response.data;
        console.log(myData);
        return <Tasks notes={response.data.title} key={response.data.id} />;
      })
      .then(() => {
        setTask({ newtask: "" });
        setisChecked(false);
      });
    // if (task.newtask === "") {
    //   alert("Please enter a task");
    // } else {
    //   if (taskList.length === 0) {
    //     setTaskList([...taskList, task]);
    //     setTask({ newtask: "" });
    //     console.log(taskList);
    //   } else {
    //     if (
    //       taskList.find(
    //         (taskIteration) => taskIteration.newtask === task.newtask
    //       )
    //     ) {
    //       alert("Task already exists");
    //       setTask({ newtask: "" });
    //     } else {
    //       setTaskList([...taskList, task]);
    //       setTask({ newtask: "" });
    //     }
    //   }
    // }
  };

  let handleModify = (taskModify, taskToBeDone) => {
    if (taskToBeDone === "Delete") {
      setTaskList(taskList.filter((task) => task.newtask !== taskModify));
    } else {
      const editedValue = prompt(taskToBeDone, taskModify);
      // Making  a copy of TaskList since we are mutating it
      let taskListCopy = [...taskList];

      taskListCopy.forEach((item, index) => {
        // Checking what item is to be deleted
        if (item.newtask === taskModify) {
          if (
            // Checking if edited value s already present in the array
            taskListCopy.find(
              (taskIteration) => taskIteration.newtask === editedValue
            )
          ) {
            // If yes then alert message and return the array
            alert("Task Already Present");
            return taskList;
          } else {
            // If UserIp is blank or presses cancel then do nothig
            if (
              editedValue === null ||
              editedValue === "null" ||
              editedValue === "undefined" ||
              editedValue === ""
            ) {
            } else {
              // Else  Modify the Array
              // Make a temp variable of that particular element
              let tempElement = { ...taskListCopy[index] };

              tempElement.newtask = editedValue;
              taskListCopy[index] = tempElement;

              return setTaskList(taskListCopy);
            }
          }
        }
      });

      // taskListCopy.find((task) => {
      //   // Making a copy the element we want to update
      //   let tempElement = { ...task };
      //   console.log(tempElement);
      //   tempElement.newtask = editedValue;
      //   task = tempElement;
      //   console.log(task);
      //   console.log(taskListCopy);
      //   return setTaskList(taskListCopy);
      // });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name="checkboxInput"
        id="checkboxInput"
        onChange={handleChecked}
        checked={isChecked}
      />
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

      {/* {taskList.length > 0
        ? taskList.map((item, index) => (
            <Tasks notes={item.newtask} key={index} onClick={handleModify} />
          ))
        : ""} */}
      {dataTask.map((task) => (
        <Tasks
          notes={task.title}
          key={task.id}
          onClick={handleModify}
          isChecked={task.completed}
        />
      ))}
    </div>
  );
};

export default NewTask;
