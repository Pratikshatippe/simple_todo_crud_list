import "./styles.css";
import AddTaskPopup from "./AddTaskPopup";
import { useState } from "react";

export default function App() {
  // const initialValues = {
  //   taskname: "",
  //   prioritybutton: ""
  // };
  const [flag, setFlag] = useState(true);
  const [list, setList] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [edit, setEdit] = useState(null);
  const addHandler = () => {
    setFlag(!flag);
    setEditFlag(false);
  };
  const deleteHandler = (item) => {
    setList(
      list.filter((elem) => elem.name.toLowerCase() !== item.name.toLowerCase())
    );
  };
  const editHandler = (i) => {
    const findItem = list.find((elem) => {
      return elem.name === i.name;
    });
    setEdit(findItem);
    setEditFlag(true);
    setFlag(!flag);
  };
  return (
    <div className="MainDiv">
      <div className="navElements">
        <ul className="navUl">
          <li className="labelName">Task List</li>
          <li>
            <button className="addTask" onClick={addHandler}>
              + Add Task
            </button>
          </li>
        </ul>
        <div className="list"></div>
      </div>
      {!flag && (
        <AddTaskPopup
          setList={setList}
          setFlag={setFlag}
          flag={flag}
          edit={edit}
          editFlag={editFlag}
          editHandler={editHandler}
          list={list}
        />
      )}
      {flag && list.length > 0 && (
        <div>
          {list.map((item) => (
            <div key={item.id} className="singletask">
              <div>{item.name}</div>
              <div>{item.priority}</div>
              <button onClick={() => editHandler(item)}>Edit</button>
              <button onClick={() => deleteHandler(item)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
