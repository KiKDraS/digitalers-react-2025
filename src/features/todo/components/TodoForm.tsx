import { useState } from "react";
import { Button } from "../../../components/Button";
import { addTodo } from "../middleware";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";

export const TodoForm = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que el input no esté vacío
    if (text.trim() === "") return;

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={text}
          placeholder="¿Qué necesitas hacer?"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" className="btn btn-primary">
          <i className="bi bi-plus-lg me-2"></i>
          Añadir
        </Button>
      </div>
    </form>
  );
};
