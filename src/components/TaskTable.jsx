import TaskRow from "./TaskRow";

export default function TaskTable({
  tasks,
  toggleTask,
  showCompleted = false,
  typeTasks,
}) {
  const taskTableRows = (value) => {
    return tasks
      .filter((task) => task.done === value)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-hover mb-4 table-responsive table-bordered border-secondary animate__animated animate__fadeIn">
      <thead>
        <tr>
          <th style={{ backgroundColor: "#656565" }} className="text-center">
            Tasks {typeTasks}
          </th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}
