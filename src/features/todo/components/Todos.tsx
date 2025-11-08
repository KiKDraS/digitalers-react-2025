import { TodoList } from "./List/TodoList";
import { TodoForm } from "./TodoForm";

export const Todos = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">
            <i className="bi bi-card-checklist me-2"></i>
            Mi Lista de Tareas
          </h1>
          <TodoForm />
          <hr className="my-4" />
          <TodoList />
        </div>
      </div>
    </div>
  );
};
