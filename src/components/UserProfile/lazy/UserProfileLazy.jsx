import { Suspense, lazy } from "react";
import ErrorBoundary from "../../core/ErrorBoundary";
import { Spinner } from "../../core/Spinner";

// Virtual DOM, antes de mostrar el componente UserProfile ejecuta el código
const UserProfileDetails = lazy(() => import("../UserProfile"));

export const UserProfileLazy = (props) => {
  const errorFallback = (
    <div className="alert alert-danger">
      No se pudo cargar el componente de perfil.
    </div>
  );

  return (
    <div className="my-2 w-50 card">
      <div className="card-header">
        <h3>Perfil de Usuario (Lazy Loaded)</h3>
      </div>
      {/* Virtual DOM, si tenes algún problema ejecutando el código de UserProfile, mostra el errorFallback */}
      <ErrorBoundary fallback={errorFallback}>
        {/* Virtual DOM, mientras ejecutas el código de UserProfile mostra el Spinner */}
        <Suspense fallback={<Spinner />}>
          <UserProfileDetails {...props} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
