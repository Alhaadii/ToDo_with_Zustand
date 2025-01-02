import React from "react";
import { usesTodoStore } from "../store";
import TodoItem from "./TodoItem";

function TodoList() {
  const items = usesTodoStore((state) => state.getTodos());
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodoList;
