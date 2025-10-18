import { useEffect, useState } from "react";
import { Spinner } from "../core/Spinner";

/*
    Error de Renderizado === El Virtual DOM no pudo hacer su trabajo y la pantalla me queda en blanco
*/

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        // Validar la respuesta del servidor
        if (!response.ok)
          throw new Error("No se pudo obtener los datos del usuario");

        setUser(await response.json());
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <Spinner />;
  if (error)
    return (
      <div className="p-2">
        <div className="alert alert-danger">Error: {error}</div>
      </div>
    );

  return (
    <div className="card-body">
      {/* conditional chaining - dato?.key */}
      <h2 className="card-title">{user.pepe()}</h2>
      <p className="card-text">Email: {user?.email}</p>
    </div>
  );

  //   return (
  //     <>
  //       {loading ? (
  //         <Spinner />
  //       ) : (
  //         <div className="card-body">
  //           {/* conditional chaining - dato?.key */}
  //           <h2 className="card-title">{user?.name}</h2>
  //           <p className="card-text">Email: {user?.email}</p>
  //         </div>
  //       )}
  //     </>
  //   );
}

/*
    function submit(dato) {
        // early return
        if (dato !== "ok") return;

        enviar(dato);
    }
*/
