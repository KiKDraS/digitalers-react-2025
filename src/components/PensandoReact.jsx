import "./PensandoReact.css";
import { Steps } from "./Steps";
import { Title } from "./Title";

export const PensandoReact = () => {
  return (
    <section className="concept-section">
      {/* Hijo */}
      <Title />

      <p>
        Pensar "en React" es un proceso de ingeniería inversa: vas de la
        interfaz visible al código, siguiendo estos pasos:
      </p>

      <Steps />

      <p>
        Este proceso garantiza que tu aplicación sea modular, fácil de depurar y
        altamente reactiva.
      </p>
    </section>
  );
};
