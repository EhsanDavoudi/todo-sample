import {createContext, useContext, useEffect, useRef, useState} from "react";

const TaskContext = createContext()

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider = ({children}) => {
  const [tasksList, setTaskList] = useState([]);

  useEffect(() => {fetchTasks()}, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch("/api/tasks");
      const tasks = await res.json();
      setTaskList(tasks);
    } catch (error) {
      console.log(error)
    }
  }

  // Add a task
  const addTask = async (taskText) => {
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text: taskText, is_completed: false}),
      });
      const newTask = await response.json()
      setTaskList(prev => [...prev, newTask])
    } catch (e) {
      console.log("Error while adding a Task:", e)
    }
  };

  // Edit a task
  const updateTask = async (updatedTask) => {
    try {
      await fetch(`/api/tasks/${updatedTask.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedTask),
      });
      setTaskList(prev => prev.map(
        task => task.id === updatedTask.id ? updatedTask : task
      ))
    } catch (e) {
      console.log("Error while updating a Task:", e)
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await fetch(`/api/tasks/${taskId}`, {method: "DELETE"});
      setTaskList(prev => prev.filter(task => task.id !== taskId));
    } catch (e) {
      console.log("Error while deleting a Task:", e)
    }
  }

  const filteredTasks = (taskFilter) => {
    return tasksList.filter((task) => {
      if (taskFilter === "all") return true;
      if (taskFilter === "completed") return task.is_completed;
      if (taskFilter === "uncompleted") return !task.is_completed;
      return true;
    })
  }

  const value = {
    tasksList,
    addTask,
    updateTask,
    deleteTask,
    filteredTasks,
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}