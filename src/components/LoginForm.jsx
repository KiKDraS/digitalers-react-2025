import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import { ROLES } from "../contexts/AuthContext/constants";
import { Button } from "./core/Button/Button";
import { Form } from "./Form/components/Form";
import { Input } from "./Form/components/Input";
import { useForm } from "./Form/hooks/useForm";

const INITIAL_FORM = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const { form, handleChange } = useForm(INITIAL_FORM);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de datos
    if (!form.email || !form.password) {
      alert("Debes completar todos los datos");
      return;
    }

    const role = form.email.includes(ROLES.ADMIN) ? ROLES.ADMIN : ROLES.USER;
    login(form.email, role);
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit} title="Iniciar Sesión">
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Button type="submit" color="primary" text="Ingresar" />
      </div>
    </Form>
  );
};
