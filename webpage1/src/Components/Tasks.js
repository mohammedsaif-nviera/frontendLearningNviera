import React from "react";
import "./Tasks.css";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function Tasks(props) {
  let task = props.notes;
  // let key = props.key;
  let handleDelete = () => {
    props.onClick(task, "Delete");
  };
  let handleEdit = () => {
    // alert(key);
    props.onClick(task, "Edit");
  };
  return (
    <div className="flexContainer">
      <div className="flexItem1 item">
        <input
          type="checkbox"
          name="task1"
          id="task1"
          className="checkbox1"
          defaultChecked={props.isChecked}
        />
      </div>
      <div className="flexItem2 item ">
        <div className="heading">{task}</div>

        <div className="description">Lorem ipsum dolor, sit amet</div>
        <div className="modifying">
          <button className="editButton" onClick={handleEdit}>
            <FaEdit />
          </button>
          <button className="deleteButton" onClick={handleDelete}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
