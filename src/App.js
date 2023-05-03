import { useState, useEffect } from "react";
import axios from "axios";
import CreateToDo from "./Components/CreateToDo/CreateToDo";
import ToDoList from "./Components/ToDoList/ToDoList";
const App = () => {
  const [toDos, setToDo] = useState([]);

  const getData = async () => {
    const response = await axios.get(" http://localhost:3001/todos");
    setToDo(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCreate = async (task) => {
    const response = await axios.post("http://localhost:3001/todos", {
      task,
    });

    const update = [...toDos, response.data];

    setToDo(update);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3001/todos/${id}`);

    const deletetask = toDos.filter((toDo) => {
      return toDo.id !== id;
    });

    setToDo(deletetask);
  };

  const handleEdit = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      task: newTitle,
    });

    const edit = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, ...response.data };
      }

      return toDo;
    });
    setToDo(edit);
  };

  return (
    <div>
      <CreateToDo onCreate={handleCreate} />
      <ToDoList toDos={toDos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
