import { useContext } from "react";
import { Form } from "./Form/components/Form";
import { Input } from "./Form/components/Input";
import { Button } from "./core/Button/Button";
import { CharacterFormContext } from "../contexts/CharacterFormContext";
import { useCharactersContext } from "../contexts/CharactersContext";

// Formulario Controlado -> Almacena en un state lo que el usuario ingresa.
// El input debe mostrar el valor de state correspondiente
export const CharacterForm = () => {
  const { form, resetForm, handleChange } = useContext(CharacterFormContext);
  const { editCharacter, addCharacter } = useCharactersContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación con early return
    if (!form.name || !form.house) {
      alert("Debes completar todos los datos");
      return;
    }

    if (form.id) editCharacter(form);
    else addCharacter(form);

    resetForm();
  };

  return (
    <Form
      title={form.id ? "Editar personaje" : "Agregar personaje"}
      onSubmit={handleSubmit}
    >
      <Input
        label="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Casa"
        name="house"
        value={form.house}
        onChange={handleChange}
      />
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Button
          type="submit"
          color={form.id ? "primary" : "success"}
          text={form.id ? "Editar" : "Agregar"}
        />
        <Button
          type="reset"
          color="danger"
          text="Limpiar"
          onClick={resetForm}
        />
      </div>
    </Form>
  );
};
