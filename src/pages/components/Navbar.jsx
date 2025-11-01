import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link, NavLink } from "react-router";
import { useThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { Button } from "../../components/Button/Button";
import { THEME } from "../../contexts/ThemeContext/constants";
import { ROUTES } from "../constants";

export const Navbar = () => {
  const { user } = useAuthContext();
  const { toggleTheme, isLightTheme } = useThemeContext();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={ROUTES.HOME}>
          Integrador React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {user && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" end to={ROUTES.HOME}>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" end to={ROUTES.PROFILE}>
                  Perfil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" end to={ROUTES.SETTINGS}>
                  Configuración
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        {user && <span className="navbar-text me-3">Hola, {user}!</span>}
        <div>
          <Button
            onClick={toggleTheme}
            text={isLightTheme ? "🌙 Dark" : "☀️ Light"}
            color={isLightTheme ? THEME.DARK : THEME.LIGHT}
          />
        </div>
      </div>
    </nav>
  );
};
