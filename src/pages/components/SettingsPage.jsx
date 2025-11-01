import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/components/Form";
import { Input } from "../../components/Form/components/Input";
import { useForm } from "../../components/Form/hooks/useForm";
import { Section } from "../../components/Section";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { THEME } from "../../contexts/ThemeContext/constants";
import { useThemeContext } from "../../contexts/ThemeContext/ThemeContext";

const INITIAL_FORM = {
  username: "",
};

export const SettingsPage = () => {
  const { theme, toggleTheme, isLightTheme } = useThemeContext();
  const buttonColor = isLightTheme ? THEME.DARK : THEME.LIGHT;

  const { form, handleChange } = useForm(INITIAL_FORM);
  const { updateName } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateName(form.username);
  };

  return (
    <Section>
      <div className="container">
        <div className="row">
          <Form onSubmit={handleSubmit} title="Configuración">
            <Input
              label="Cambiar Nombre:"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            <div className="pt-2">
              <Button type="submit" color={buttonColor} text="Cambiar" />
            </div>
          </Form>
        </div>
        <div className="row my-4">
          <hr />
        </div>
        <div className="row">
          <h4>Tema de la Aplicación</h4>
          <p>Tema actual: {theme.toUpperCase()}</p>
          <div className="p-2">
            <Button
              color={buttonColor}
              text={`Cambiar a ${isLightTheme ? "Oscuro" : "Claro"}`}
              onClick={toggleTheme}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
