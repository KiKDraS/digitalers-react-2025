import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Cartel } from "./components/Cartel";

/*
  JSX (JavaScript XML)
    -> Extensión de sintaxis de JS que simula ser código HTML

  ¿Qué es un Componente de React?
    -> Es una función que puede utilizar State
    -> Es una función que retorna JSX === Es una función que retorna una vista
    -> Es una función que puede recibir datos
      -> Props === Parámetros

  State
    -> Elemento que se utiliza para registrar el estado de un componente y saber cuando hay un cambio
    -> El trabajo con State permite crear código Reactivo  
    -> useState(valorInicial) - Hook -
      -> Permite crear un valor de State en React
      -> retorna una tupla (array de dos posiciones)
        -> array[0] = valor actual del state
        -> array[1] = función actualizadora del state

  React
    -> Librería JS para la manipulación de las vistas
    -> Simplifica la modificación del DOM cuando sea necesario
    -> ¿Cómo saber React cuando es necesario modificar el DOM?
      -> React utiliza los valores de State para lanzar su flujo de actualización de DOM      

  Flujo de actualización de DOM 
    -> Virtual DOM 
      -> Copia propia de React del DOM real     
      -> Sabe cuáles son los valores de State presentes en el proyecto

  Para modificar una vista en React tengo que modificar un valor de State    
*/

function App() {
  const [stateCount, setCount] = useState(0);
  // const tupla = useState(0);
  // const [count, setCount] = tupla;

  const handleClick = () => setCount((count) => count + 1);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>Actualizar</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Cartel({count: stateCount}) */}
      <Cartel count={stateCount} />
      <Cartel count={"Pepito"} />
    </>
  );
}

export default App;
