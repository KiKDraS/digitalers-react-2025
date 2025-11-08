import { Button } from "../../../../components/Button";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { deleteTodo, toggleTodo } from "../../middleware";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id!));
  };

  const itemClasses = `list-group-item d-flex justify-content-between align-items-center ${
    todo.completed ? "list-group-item-light text-muted" : ""
  }`;

  const iconClasses = `bi ${
    todo.completed ? "bi-check-circle-fill text-success" : "bi-circle"
  }`;

  const textClasses = `flex-grow-1 ${
    todo.completed ? "text-decoration-line-through" : ""
  }`;

  return (
    <li className={itemClasses}>
      <div>
        {/* Icono para marcar como completado */}
        <Button
          className="btn btn-link p-0 me-3 text-decoration-none"
          onClick={handleToggle}
        >
          <i className={iconClasses}></i>
        </Button>

        {/* Texto de la tarea */}
        <Button
          className={`${textClasses} btn btn-link p-0 text-start`}
          onClick={handleToggle}
        >
          {todo.text}
        </Button>
      </div>

      {/* Botón de eliminar */}
      <Button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
        <i className="bi bi-trash3-fill"></i>
      </Button>
    </li>
  );
};
