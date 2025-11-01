import { useNavigate } from "react-router";
import { Button } from "../components/Button/Button";
import { Form } from "../components/Form/components/Form";
import { Input } from "../components/Form/components/Input";
import { useForm } from "../components/Form/hooks/useForm";
import { Section } from "../components/Section";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import { THEME } from "../contexts/ThemeContext/constants";
import { useThemeContext } from "../contexts/ThemeContext/ThemeContext";
import { ROUTES } from "./constants";

const INITIAL_FORM = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  const { form, handleChange } = useForm(INITIAL_FORM);
  const { login } = useAuthContext();
  const { isLightTheme } = useThemeContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de formulario completo
    if (!form.username || !form.password) {
      alert("Debes completar todos los campos");
      return;
    }

    login(form.username);
    navigate(ROUTES.HOME);
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit} title="Iniciar Sesión">
        <Input
          label="Nombre de usuario"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <div className="pt-4">
          <Button
            type="submit"
            color={isLightTheme ? THEME.DARK : THEME.LIGHT}
            text="Ingresar"
          />
        </div>
      </Form>
    </Section>
  );
};
