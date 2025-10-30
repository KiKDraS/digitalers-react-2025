import { useCallback, useMemo, useState } from "react";

export const useForm = (initialForm = {}) => {
  // representa qué datos se recopilan en cada formulario
  const [form, setForm] = useState(initialForm);

  // e -> evento
  // target -> elemento que disparó el evento
  const handleChange = useCallback((e) => {
    //Destructurar el atributo name y value del elemento que disparó el evento
    const { name, value } = e.target;

    //name = "name"
    //[name]: value, -> name: value

    //name = "house"
    //[name]: value, -> house: value
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return useMemo(
    () => ({ form, handleChange, updateForm: setForm }),
    [form, handleChange]
  );
};
