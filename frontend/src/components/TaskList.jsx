import { useDispatch, useSelector } from "react-redux";

import { RiDeleteBin6Line } from "react-icons/ri";
import { completedTodo, removeTodo } from "../features/todo/todoSlice";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);

  return (
    <div className="flex w-full flex-col gap-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between border border-black p-3"
        >
          <div className="flex items-center gap-3">
            <button onClick={() => dispatch(completedTodo(task.id))}>
              {!task.completed ? (
                <IoCheckmarkDoneCircleOutline size={25} />
              ) : (
                <IoCheckmarkDoneCircleSharp size={25} />
              )}
            </button>

            <p>{task.name}</p>
          </div>
          <button onClick={() => dispatch(removeTodo(task.id))}>
            <RiDeleteBin6Line />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
