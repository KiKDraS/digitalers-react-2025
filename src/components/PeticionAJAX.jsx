import React, { useEffect } from "react";

export const PeticionAJAX = () => {
  useEffect(() => {
    // IIFE - Immediately Invoke Function Expression (Expresión de Función inmediatamente invocada)
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      console.log(res);

      //https://youtu.be/6Jfk8ic3KVk?si=qIyjqH0mQmWx_nLq
    })();

    // const fetchData = async () => {

    // }

    // fetchData();
  }, []); // Solo se ejecuta el efecto la primera vez que se monta el componente

  return <div>PeticionAJAX</div>;
};
