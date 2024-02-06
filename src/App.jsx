import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    debugger;
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <p class="h2 fw-bold">PLEASE EDIT TASK!</p>{" "}
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
