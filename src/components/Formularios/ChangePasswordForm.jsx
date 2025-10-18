import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { Button } from "../core/button/Button";
import { useForm } from "./hooks/useForm";

export const ChangePasswordForm = () => {
  const { form, handleChange } = useForm({
    password: "",
    newPass: "",
    newPassRepeat: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form title="Cambiar Contraseña" onSubmit={handleSubmit}>
      <Input
        label="Contraseña actual"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <Input
        label="Nueva contraseña"
        type="password"
        name="newPass"
        value={form.newPass}
        onChange={handleChange}
      />
      <Input
        label="Repetir nueva contraseña"
        type="password"
        name="newPassRepeat"
        value={form.newPassRepeat}
        onChange={handleChange}
      />
      <Button text="Actualizar" type="submit" color="secondary" />
    </Form>
  );
};
