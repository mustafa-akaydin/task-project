import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {" "}
      {taskformUpdate ? (
          <div className="task-update">
            <p class="h3 fw-bold">PLEASE EDIT TASK!</p>
            <form className="task-form">
              <label className="form-label">Title Edit</label>
              <input
                value={title}
                onChange={handleChange}
                className="form-control"
              />
              <label className="form-label">Task Edit</label>
              <textarea
                value={taskDesc}
                onChange={handleTaskChange}
                className="form-control"
                rows={5}
              />
              <button className="btn btn-warning mt-3" onClick={handleSubmit}>
                Edit
              </button>
            </form>
          </div>
      ) : (
        <div className="border border-success-subtle p-3 mt-2">
          <div className="task-create">
            <p class="h3 fw-bold">PLEASE ADD A TASK!</p>
            <form className="mb-3">
              <label className="form-label">Title</label>
              <input
                value={title}
                onChange={handleChange}
                className="form-control"
              />
              <label className="form-label">Enter Task!</label>
              <textarea
                value={taskDesc}
                onChange={handleTaskChange}
                className="form-control"
                rows={5}
              />
              <button className="btn btn-success mt-3" onClick={handleSubmit}>
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
