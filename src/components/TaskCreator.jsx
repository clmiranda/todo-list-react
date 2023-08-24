import { useState } from "react";
import toast from "react-hot-toast";

export const TaskCreator = ({ createNewTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      if (createNewTask(taskName)) {
        toast.success("Task created.", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setTaskName("");
      } else {
        toast.error("Task repeated!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-md-flex justify-content-between"
      >
        <div className="form-group col-md-9">
          <input
            autoFocus
            className="form-control"
            type="text"
            name="inputTask"
            placeholder="Enter a New Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Add Task</button>
      </form>
    </>
  );
};
