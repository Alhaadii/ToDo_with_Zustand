import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { usesTodoStore, useTemTodoStore } from "../store";

function TodoItem({ item }) {
  const { deleteTodo } = usesTodoStore((state) => state);
  const { setTemtodo } = useTemTodoStore((state) => state);

  return (
    <div className="card border-0 shadow-sm mb-2">
      <div className="card-body p-4">
        <div className="card-text d-flex justify-content-between align-items-center">
          <p className="my-auto">{item.title}</p>
          <div>
            <FaPencilAlt
              onClick={() => setTemtodo(item)}
              style={{ cursor: "pointer" }}
              className="text-success mb-1 fs-5 me-3 c"
            />
            <FaTrashAlt
              style={{ cursor: "pointer" }}
              onClick={() => deleteTodo(item.id)}
              className="text-danger mb-1 fs-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
