import { useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { fetchTodos } from "../../middleware";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { STATUS } from "../../constants/STATUS";
import { Spinner } from "../../../../components/Spinner";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const dispatch = useAppDispatch();
  const todosState = useAppSelector((store) => store.todos);
  const { todos, status } = todosState;

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === STATUS.PENDING) {
    return <Spinner />;
  }

  return (
    <ul className="list-group">
      {todos.length === 0 ? (
        <li className="list-group-item text-center text-muted">
          ¡No hay tareas pendientes!
        </li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};
