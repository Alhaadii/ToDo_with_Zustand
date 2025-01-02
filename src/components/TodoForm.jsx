import React, { useEffect, useState } from "react";
import { usesTodoStore, useTemTodoStore } from "../store";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { createTodo, updateTodo } = usesTodoStore((state) => state);
  const { setTemtodo, tempTodo } = useTemTodoStore((state) => state);

  useEffect(() => {
    if (tempTodo) {
      setTitle(tempTodo?.title);
    }
  }, [tempTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Please, Register a new todo");
    if (tempTodo) {
      // console.log(yes);
      updateTodo({
        id: tempTodo.id,
        title,
      });
      setTemtodo(null);
      setTitle("");
    } else {
      createTodo({
        id: uuidv4(),
        title,
      });
      setTitle("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex border border-dark mb-4 p-2"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          value={title}
          id="title"
          placeholder="Add a new Todo"
          className="form-control  border0 shadow-none bg-transparent rounded-0"
        />
        <button className="btn btn-outline-dark rounded-0">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
