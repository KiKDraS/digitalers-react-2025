// background-color => kebhab
// backgroundColor => camelCase

import { Button } from "../components/Button/Button";
import { Section } from "../components/Section";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import { THEME } from "../contexts/ThemeContext/constants";
import { useThemeContext } from "../contexts/ThemeContext/ThemeContext";

export const ProfilePage = () => {
  const { user, logout } = useAuthContext();
  const { isLightTheme } = useThemeContext();

  return (
    <Section>
      <div className="card shadow-sm">
        <div className="card-header">
          <h3>Perfil de Usuario</h3>
        </div>
        <div className="card-body">
          <p className="fs-4">
            <strong>Nombre</strong> {user}
          </p>
        </div>
        <div className="card-footer">
          <div className="w-50 mx-auto p-2">
            <Button
              text="Cerrar sesión"
              onClick={logout}
              color={isLightTheme ? THEME.DARK : THEME.LIGHT}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
