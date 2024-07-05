import { useState } from "react";
import TaskList from "./TaskList";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

import { RiAddFill } from "react-icons/ri";

function TaskInput() {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskName) return;
    dispatch(addTodo({ name: taskName, completed: false, id: Date.now() }));
    setTaskName("");
  }

  return (
    <div className="mt-10 flex w-full flex-col items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-80 justify-between border border-black"
      >
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
          className="w-full p-3 outline-none"
        />
        <button className="px-3">
          <RiAddFill size={25} />
        </button>
      </form>

      <div className="mt-5 w-80">
        <TaskList />
      </div>
    </div>
  );
}

export default TaskInput;
