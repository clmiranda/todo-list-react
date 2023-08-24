import toast from "react-hot-toast";

export default function VisivilityControl({
  isChecked,
  setShowCompleted,
  cleanTasks,
}) {
  const handleClean = () => {
    Swal.fire({
      title: "Are you sure you want to delete completed tasks?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: "#000000",
      color: "#fff",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (cleanTasks()) {
          toast.success("Tasks pending deleted.", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        } else {
          toast.error("Has no pending tasks!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      }
    });
  };
  return (
    <div
      className="d-flex justify-content-between text-center px-3 py-2 my-3 align-items-center rounded"
      style={{ backgroundColor: "#808B96" }}
    >
      <div className="form-check form-switch">
        <input
          id="tasksCompleted"
          type="checkbox"
          role="switch"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label htmlFor="tasksCompleted" className="form-check-label">
          Show Tasks Completed
        </label>
      </div>
      <button className="btn btn-danger" onClick={handleClean}>
        Clean
      </button>
    </div>
  );
}
