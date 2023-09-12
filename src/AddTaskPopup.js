import { useState } from "react";
import "./Addtaskpopup.css";

const AddTaskPopup = (props) => {
  const [value, setValue] = useState("");
  const [prior, setPrior] = useState(null);
  const AddNewTask = (e) => {
    const newData = {
      id: Math.random(),
      name: value,
      priority: prior
    };
    console.log(props.editFlag);
    if (!newData) {
      alert("Enter Values");
    } else if (props.editFlag) {
      props.setList(
        props.list.map((elem) => {
          if (elem.id === props.edit.id) {
            return { ...elem, name: value, priority: prior };
          }
          return elem;
        })
      );
    } else {
      props.setList([...props.list, newData]);
      setValue("");
    }
  };
  const closeHandler = () => {
    props.setFlag(!props.flag);
  };
  return (
    <div className="outer">
      <div className="titlePart">
        <div>{props.editFlag ? "Edit task" : "Add Task"}</div>
        <button onClick={closeHandler}>Close</button>
      </div>
      <div>
        <div className="task">
          <label>Task</label>
          <div>
            <input
              type="text"
              name="taskname"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="priority">
          <label>Priority</label>
          <div className="button">
            <button
              value="Low"
              name="prioritybutton"
              onClick={(e) => setPrior(e.target.value)}
            >
              Low
            </button>
            <button
              value="Medium"
              name="prioritybutton"
              onClick={(e) => setPrior(e.target.value)}
            >
              Medium
            </button>
            <button
              value="High"
              name="prioritybutton"
              onClick={(e) => setPrior(e.target.value)}
            >
              High
            </button>
          </div>
        </div>
      </div>
      <div>
        <button className="add" onClick={AddNewTask}>
          {props.editFlag ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddTaskPopup;
