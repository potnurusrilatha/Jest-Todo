"use client";

import Task from "@/app/components/Task";
import NewTask from "@/app/components/NewTask";
import { defaultToDos } from "@/app/data/default-todo";
import { ToDoType } from "@/app/utils/types";
import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState<ToDoType[]>(defaultToDos);

  const handleDelete = (taskId: string): void => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleAdd = (newTask: ToDoType) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="p-4">
      <p className="p-4 underline">TaskList</p>
      <ul>
        {tasks.map(item => (
          <Task key={item.id} {...item} deleteTask={handleDelete} />
        ))}
      </ul>
      <NewTask addTask={handleAdd} />
    </div>
  );
};

export default TaskList;
