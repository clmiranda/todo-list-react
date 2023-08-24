export default function TaskRow({ task, toggleTask }) {
  return (
    <tr key={task.name}>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
}
