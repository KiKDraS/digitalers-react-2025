import React, { useEffect, useState } from "react";

export const CicloDeVida = () => {
  const [count, setCount] = useState(0);

  const cbCicloDeVida = () => {
    // Qué hacer cuando el Componente se monta
    document.title = `Contador: ${count}`;

    const timerID = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Qué hacer cuando el Componente se desmonta (opcional)
    return () => {
      document.title = "React App";
      clearTimeout(timerID);
    };
  };

  // Hook que permite controlar el Ciclo de Vida del Componente
  useEffect(cbCicloDeVida, [count]); //Array de dependencias

  /*
    useEffect (permite "enganchar" el componente a elementos externos)
        -> cb - Permite que el programador realice acciones cuando el componente se monta/desmonta
        -> Array de dependencias - Permite que el programador controle cuando se ejecuta la cb    
        => "listener de valores de state"
        => [] - La cb se ejecuta solo cuando el componente se monta por primera vez (se agrega al árbol de componentes)
        => [state] -> La cb se ejecuta cuando el componente se monta por primera vez (se agrega al árbol de componentes) y cada vez que el valor de state se modifique
    */

  useEffect(() => {
    console.log(
      "El componente se monta por primera vez. Se agrega al Árbol de Componentes"
    );
  }, []);

  return <div>CicloDeVida</div>;
};
