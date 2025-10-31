import { useAuthContext } from "../contexts/AuthContext/AuthContext";

export const HomePage = () => {
  const { user } = useAuthContext();

  return (
    <div className="card text-center shadow-sm p-4">
      <div className="card-body">
        <h1 className="card-title">Página de Inicio</h1>
        <p className="card-text fs-5">¡Bienvenido de vuelta, {user}!</p>
      </div>
    </div>
  );
};
