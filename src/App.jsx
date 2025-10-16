import { useState } from "react";
import "./App.css";
import { CicloDeVida } from "./components/CicloDeVida";
import { Formulario } from "./components/formularios/Formulario";
import { PeticionAJAX } from "./components/PeticionAJAX";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Formulario />
      <hr />
      <button
        className="btn btn-success"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "Desmontar" : "Montar"}
      </button>
      {show && <CicloDeVida />}
      {/* {show && <PeticionAJAX />} */}
    </>
  );
}

export default App;
