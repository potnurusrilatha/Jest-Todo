'use client'
import { ToDoType } from "@/app/utils/types";
import { useState } from "react";
import { v4 as uuid } from "uuid";

type NewTaskProps = {
  addTask: (newTask: ToDoType) => void;
};

const NewTask = ({ addTask }: NewTaskProps) => {
  const [inputvalue, setInputvalue] = useState<string>("");

  const handleClick = () => {
    const userTask = {id: uuid(), task: inputvalue}
    addTask(userTask)
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl w-full mb-4">Add a Task!</h2>
      <fieldset>
        <label htmlFor="user-input">Add your task:</label>
        <input
          id="user-input"
          value={inputvalue}
          onChange={(event) => setInputvalue(event.target.value)}
          className="w-full border rounded mt-4 p-4"
          placeholder="Plan your day..."
        />
      </fieldset>
      <button
        onClick={handleClick}
        className="mt-4 m-auto rounded-2xl bg-gray-800 text-white text-center p-4"
      >
        Add task!
      </button>
    </div>
  );
};

export default NewTask;
