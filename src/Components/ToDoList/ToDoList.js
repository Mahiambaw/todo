import style from "./ToDoList.module.css";
import ToDoShow from "../ToDoShow/ToDoShow";
const ToDoList = ({ toDos, onDelete, onEdit }) => {
  const list = toDos.map((toDo) => {
    return (
      <ToDoShow key={toDo.id} toDo={toDo} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className={style["container-center"]}>{list}</div>;
};

export default ToDoList;
