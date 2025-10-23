import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  // e -> evento
  // target -> elemento que disparó el evento
  const handleChange = (e) => {
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
  };

  return { form, handleChange, updateForm: setForm };
};
