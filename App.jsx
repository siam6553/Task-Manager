import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        margin: "20px",
        backgroundColor: "#e3f2fd",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1 style={{ color: "#1e88e5" }}>To-Do App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{
            padding: "10px",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "10px 20px",
            backgroundColor: "#1e88e5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              onClick={() => handleToggleTask(index)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                color: task.completed ? "gray" : "black",
              }}
            >
              {task.text}
            </span>
            <button
              style={{
                marginLeft: "10px",
                color: "white",
                backgroundColor: "#e53935",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <footer
        style={{
          marginTop: "30px",
          padding: "10px",
          backgroundColor: "#0d47a1",
          color: "white",
          borderRadius: "5px",
        }}
      >
        <p>&copy; {new Date().getFullYear()} All Rights Are Reserved by Siam</p>
      </footer>
    </div>
  );
}

export default TodoApp;