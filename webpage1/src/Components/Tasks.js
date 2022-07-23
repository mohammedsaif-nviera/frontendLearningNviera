import React from "react";
import "./Tasks.css";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function Tasks(props) {
  let task = props.notes;
  return (
    <div className="flexContainer">
      <div className="flexItem1 item">
        <input type="checkbox" name="task1" id="task1" className="checkbox1" />
      </div>
      <div className="flexItem2 item ">
        <div className="heading">{task}</div>

        <div className="description">Lorem ipsum dolor, sit amet</div>
        <div className="modifying">
          <div className="editButton">
            <FaEdit />
          </div>
          <div className="deleteButton">
            <AiFillDelete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
