import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisivilityControl from "./components/VisivilityControl";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (
      !tasksItems.find(
        (task) => task.name.toLowerCase() === taskName.toLowerCase()
      )
    ) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
      return true;
    }
    return false;
  };

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const cleanTasks = () => {
    if (tasksItems.filter((task) => task.done).length > 0) {
      setTasksItems(tasksItems.filter((task) => !task.done));
      setShowCompleted(false);
      return true;
    }
    return false;
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <>
      <main className="container col-lg-6 offset-lg-3 mt-5">
        <TaskCreator createNewTask={createNewTask} />

        <VisivilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          typeTasks={"Pending"}
        />

        {showCompleted && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
            typeTasks={"Completed"}
          />
        )}

        <Toaster position="top-left" />
      </main>

      <Footer />
    </>
  );
}

export default App;
