import js from "@eslint/js";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTemTodoStore = create((set) => ({
  tempTodo: null,
  setTemtodo: (todo) => set({ tempTodo: todo }),
}));

const usesTodoStore = create(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        getTodos: () => get().todos,
        createTodo: (todo) =>
          set((state) => ({
            todos: [...state.todos, todo],
          })),

        updateTodo: (todo) =>
          set((state) => ({
            todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
          })),
        deleteTodo: (id) => {
          if (confirm("Are you sure you want to delete this todo?")) {
            set((state) => ({
                todos: state.todos.filter((t) => t.id !== id),
            }));
          }
        }
      }),
      {
        name: "todo",
      }
    ),
    { anonymousActionType: "TODO" }
  )
);

export { usesTodoStore, useTemTodoStore };
