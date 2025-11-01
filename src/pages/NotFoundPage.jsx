import { Link } from "react-router";
import { ROUTES } from "./constants";
import { useThemeContext } from "../contexts/ThemeContext/ThemeContext";

export const NotFoundPage = () => {
  const { isLightTheme } = useThemeContext();

  return (
    <section className="container mt-5">
      <div className="alert alert-warning text-center" role="alert">
        <h4 className="alert-heading">🚫 Página No Encontrada (Error 404)</h4>
        <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
        <hr />
        <p className="mb-0">
          <Link
            to={ROUTES.HOME}
            className={`btn ${isLightTheme ? "btn-dark" : "btn-light"} `}
          >
            Volver a la Página Principal
          </Link>
        </p>
      </div>
    </section>
  );
};
