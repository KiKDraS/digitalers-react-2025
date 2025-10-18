import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { Button } from "../core/button/Button";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useForm } from "./hooks/useForm";
import { useEffect } from "react";

/*
    Formulario Controlado - Almacena en el State los valores ingresados en los input

    State
        -> Almacena la información del Componente en determinado momento
        -> Sirve para que el Virtual Dom se entere que tiene que actualizar la vista


    React
        -> Surge en 2013(?)
            -> Componente de Clase (Clase de JS)
                -> State solo dentro de Componente de Clase 
            -> Componente Funcional (Función de JS)
        -> 2018(?) - versión 16.8
            -> Hooks - Funciones que pueden manipular state
                -> Hooks Nativos - Se pueden usar porque usamos React
                    -> useState
                    -> useEffect
                    -> useMemo
                    -> useCallback
                    -> useContext
                -> Hooks Personalizados - Hooks que crea el programador    
                    -> Reglas de los Hooks 
                        -> El nombre de la función tiene que arrancar con use
                            -> useFetch
                            -> useLocalStorage
                            -> usePepito
                        -> Las funciones Hook no pueden llamarse de forma condicional ni dentro de un bucle. Solo se pueden utilizar dentro de Componentes Funcionales u otros Hooks    

*/
export const LoginForm = () => {
  const { storedValue, setStoredValue } = useLocalStorage("email", "");
  const { form, handleChange } = useForm({ email: storedValue, password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setStoredValue(form.email);
  }, [form.email]);

  return (
    <Form title="Iniciar sesión" onSubmit={handleSubmit}>
      <Input
        label="Correo Electrónico"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        label="Contraseña"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button text="Ingresar" type="submit" />
    </Form>
  );
};
