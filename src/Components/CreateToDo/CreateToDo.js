import { useState } from "react";
import style from "./CreateToDo.module.css";

const CreateToDo = ({ onCreate }) => {
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(item);
    setItem("");
  };
  return (
    <div className={style["container-center"]}>
      <form onSubmit={handleSubmit} className={style["todo-form"]}>
        <lable>Please Enter Your Item</lable>
        <input onChange={handleChange} value={item} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateToDo;
