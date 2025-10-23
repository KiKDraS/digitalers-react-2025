import { Form } from "./Form/components/Form";
import { Input } from "./Form/components/Input";
import { Button } from "./core/Button/Button";

// Formulario Controlado -> Almacena en un state lo que el usuario ingresa.
// El input debe mostrar el valor de state correspondiente
export const CharacterForm = ({
  handleSubmit,
  form: { name, house, id },
  resetForm,
  handleChange,
}) => {
  return (
    <Form
      title={id ? "Editar personaje" : "Agregar personaje"}
      onSubmit={handleSubmit}
    >
      <Input label="Nombre" name="name" value={name} onChange={handleChange} />
      <Input label="Casa" name="house" value={house} onChange={handleChange} />
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Button
          type="submit"
          color={id ? "primary" : "success"}
          text={id ? "Editar" : "Agregar"}
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
