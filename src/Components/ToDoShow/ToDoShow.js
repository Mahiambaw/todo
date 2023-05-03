import { useState } from "react";
import style from "./ToDoShow.module.css";
import { FaRegEdit, FaTrash } from "react-icons/fa";

import ToDoEdit from "../ToDoEdit/ToDoEdit";

const ToDoShow = ({ toDo, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleDelete = () => {
    onDelete(toDo.id);
  };
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };
  const element = showEdit && <ToDoEdit onSubmit={handleSubmit} toDo={toDo} />;
  return (
    <div className={style["show-container"]}>
      <div className={style.show}>
        <img
          src={`https://picsum.photos/seed/${toDo.id}/300/200`}
          alt="books"
        />
        <h3>{toDo.task}</h3>
        {element}
        <button onClick={handleEdit} className={style["button-edit"]}>
          <FaRegEdit />
        </button>
        <button onClick={handleDelete} className={style["button-trash"]}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default ToDoShow;
