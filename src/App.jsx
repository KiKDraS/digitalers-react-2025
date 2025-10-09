import { useState } from "react";
import "./App.css";
import { PensandoReact } from "./components/PensandoReact";

/*
  Componentes
    -> Función que se usa para crear UI (User Interface)
      -> UI === Lo que el usuario ve dentro de mi Sitio Web
    -> Puede generar una UI interactiva (Componente funcional)
      -> Un cuadro de comentario
      -> Un botón
      -> Formulario
    -> Puede generar UI estáticas (Componente de renderizado)
      -> Lista  
    -> Elemento reutilizable de la App  
    -> Los componentes solo pueden retornar un dato
      -> Con JSX cada "etiqueta HTML" representa un dato
      -> <></> - Fragmento: permite devolver un único dato conformado por varios elementos JSX ("etiquetas HTML")

  State
    -> "variable" que permite identificar cambios
    -> Cuando arranca la app/cuando se abre la página web, Virtual DOM guarda la información sobre qué componente tienen State y cuál es su valor inicial
    -> Virtual DOM utiliza la variable State para saber cuando tienen que "re-renderizar" un componente
      -> Renderizar Componente === Montar Componente en el DOM Real === Mostrar el Componente en el Sitio Web
    -> ¿Cuando agregamos State a un Componente?  
      -> Cuando el valor a mostrar puede sufrir modificaciones a lo largo del uso de la App

  Props
    -> Equivalente a parámetros de una función
    -> Objeto
      -> Para trabajar con props es necesario destructurar el objeto
      -> destructurar un objeto === crear una nueva variable usando el nombre de la key que contiene el objeto


  Renderizar === Mostrar contenido

  Virtual DOM
    -> Se encarga de mejorar la performance en la interacción con el DOM Real
    -> Tiene una copia del Árbol de Componentes de la App

  Renderizado Condicional
    -> Es una técnica que utiliza condiciones para indicar qué se debe mostrar
    -> Depende de un valor State 
      
  falsies - En una condición equivalen a false
    => 0
    => -0
    => false
    => undefined
    => null
    => NaN   
    => ""

  trusties - En una condición equivalen a true
    => Todo lo que no sea falsie  
*/

// Padre
function App() {
  //count: valor actual
  //setCount: función modificadora
  //0: valor inicial
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleShow = () => {
    // setShow(true);
    // setShow((stateActual) => (stateActual ? false : true));
    setShow((stateActual) => !stateActual);
  };

  return (
    <>
      <button onClick={handleClick}>Contador: {count}</button>
      <br />
      <hr />
      <br />
      <button onClick={handleShow}>
        {/* Renderizado Condicional */}
        {show ? "Ocultar" : "Mostrar"} explicación
      </button>
      <br />
      {/* Renderizado Condicional */}
      {show && <PensandoReact />}
      {show ? <p>Soy JSX</p> : <p>Se puede hacer lo mismo con Componentes</p>}
    </>
  );
}

export default App;
