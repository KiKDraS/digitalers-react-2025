import "./App.css";
import { ChangePasswordForm } from "./components/Formularios/ChangePasswordForm";
import { LoginForm } from "./components/Formularios/LoginForm";
import { UserProfileLazy } from "./components/UserProfile/lazy/UserProfileLazy";

function App() {
  return (
    <section className="container-lg p-4">
      <h2>Clase 38</h2>
      <h3>Composición</h3>
      <p>
        La composición consiste en construir interfaces combinando componentes
        más pequeños y reutilizables
      </p>
      <p>
        Hablar de composición es lo mismo que decir usar la prop "children" para
        renderizar Componentes como contenido de otro Componente
      </p>
      <div className="d-flex justify-content-center align-items-start gap-4">
        <LoginForm />
        <ChangePasswordForm />
      </div>
      <hr className="my-4" />
      <h3>Peticiones AJAX</h3>
      <div className="d-flex justify-content-center align-items-start gap-4">
        <div className="my-2 w-50 card">
          <div className="card-header">
            <h3>Perfil de Usuario (Classic)</h3>
          </div>
          {/* <UserProfile userId={1} /> */}
        </div>
        <UserProfileLazy userId={1} />
      </div>
    </section>
  );
}

export default App;
