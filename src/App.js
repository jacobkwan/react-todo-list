import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Get the things",
      day: "Feb 5th",
      reminder: true,
    },
    {
      id: 2,
      text: "Buy the other thing",
      day: "Feb 6th",
      reminder: true,
    },
    {
      id: 3,
      text: "Meeting with boss",
      day: "Feb 7th",
      reminder: true,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task on click
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.reminder = !task.reminder;
        }
        return task;
      })
    );
  };
  return (
    <div className="container">
      <Header
        showAddTask={showAddTask}
        onClickAddBtn={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "All tasks completed!"
      )}
    </div>
  );
};

export default App;
