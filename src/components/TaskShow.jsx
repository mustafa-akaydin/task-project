import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  // console.log(task);
  return (
    <div className="task-show border border-success-subtle">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Mission</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Task Summary</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="btn btn-danger me-3" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="btn btn-primary" onClick={handleEditClick}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
