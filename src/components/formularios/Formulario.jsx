import React, { useState } from "react";
import { Input } from "./Input";

const REG_EXP = /[A-Za-z ]/;

const INITIAL_STATE = {
  nombre: "",
  password: "",
};

// Formulario Controlado -> Formulario que tiene un valor de state para representar qué se escribe en sus input
export const Formulario = () => {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar inputs antes de enviar el formulario
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form
      className="w-75 p-4 border border-2 rounded mx-auto "
      onSubmit={handleSubmit}
    >
      <Input
        label="Nombre"
        name="nombre"
        handleChange={handleChange}
        value={form.nombre}
        validate={(text) => {
          return REG_EXP.test(text);
        }}
      />
      <Input
        label="Contraseña"
        name="password"
        handleChange={handleChange}
        type="password"
        value={form.password}
      />

      <input type="submit" value="Enviar" className="btn btn-primary" />
    </form>
  );
};

/*
    JS Plano

    const form = document.querySelector("form");

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validar inputs antes de enviar el formulario
    };

    form.addEventLister("submit", handleSubmit);
    
    const handleChange = (e) => {
        const targetID = e.target.id;
        
        if(targetID === "nombre") {
            // Validar el input con id="nombre"
        }
    }

    form.addEventListener("change", handleChange);
*/
