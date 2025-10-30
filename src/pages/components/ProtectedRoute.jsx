import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  // No hay sesión iniciada
  if (!user) {
    // Redirigir al login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
