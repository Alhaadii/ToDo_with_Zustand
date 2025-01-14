import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="Container">
      <div className="row gy-3 mt-5">
        <div className="col-lg-6 col-md-10 col-12 mx-auto bg-light p-5 shadow">
          <TodoForm />
          <TodoList />
          <p className="text-center text-primary">Copyright &copy;2025</p>
        </div>
      </div>
    </div>
  );
};

export default App;
