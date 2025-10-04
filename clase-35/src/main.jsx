import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
  Punto de entrada de la aplicación
    -> El archivo desde el cuál Rollup y todas las tecnologías
    necesarias empiezan a leer el proyecto
*/

//Seleccionamos el elemento que se encuentra en el index.html
const htmlElement = document.getElementById("root");
//Usamos el elemento para indicar dónde "anclar" el HTML que crean los componentes de React
const rootReactElement = createRoot(htmlElement);
//Insertamos en el "elemento ancla" el HTML que crean los componente de React
rootReactElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
