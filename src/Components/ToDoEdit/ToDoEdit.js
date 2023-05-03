import { useState } from "react";
import style from "./ToDoEdit.module.css";

const ToDoEdit = ({ onSubmit, toDo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(toDo.id);
    onSubmit(toDo.id, title);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style["form-edit"]}>
        <label>Edit Title</label>
        <input onChange={handleChange} value={title} />
      </form>
    </div>
  );
};

export default ToDoEdit;
