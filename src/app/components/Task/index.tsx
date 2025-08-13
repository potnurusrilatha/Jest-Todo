import { ToDoType } from "@/app/utils/types";

interface ToDoTaskProps extends ToDoType {
  deleteTask: (id: string) => void;
}

const Task = ({ id, task, deleteTask }: ToDoTaskProps) => {
  const handleClick = () => {
    deleteTask(id);
  };

  return (
    <li className="flex border mb-4 p-4 rounded-2xl justify-between items-center">
      <span>{task}</span>
      <button
        onClick={handleClick}
        aria-label={`Delete ${task}`}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        X
      </button>
    </li>
  );
};

export default Task;
