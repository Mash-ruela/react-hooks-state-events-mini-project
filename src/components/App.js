import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks = tasks.filter(
    (task) => selectedCategory === "All" || task.category === selectedCategory
  );

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((cat) => cat !== "All")} // Pass filtered categories
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;