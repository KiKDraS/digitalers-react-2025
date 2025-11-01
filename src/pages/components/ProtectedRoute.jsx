import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { ROUTES } from "../constants";

export const ProtectedRoute = () => {
  const { user } = useAuthContext();
  const location = useLocation();

  // No hay sesión iniciada
  if (!user) {
    // Redirigir al login
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  // <Outlet /> => children de React Router
  return <Outlet />;
};
