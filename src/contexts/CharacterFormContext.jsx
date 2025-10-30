import { createContext, useCallback, useMemo } from "react";
import { useForm } from "../components/Form/hooks/useForm";

const CharacterFormContext = createContext(null);

const INITIAL_FORM = {
  name: "",
  house: "",
  id: null,
};

const CharacterFormProvider = ({ children }) => {
  const { form, handleChange, updateForm } = useForm(INITIAL_FORM);

  const resetForm = useCallback(() => {
    updateForm(INITIAL_FORM);
  }, []);

  const setCharacterToEdition = useCallback((character) => {
    updateForm(character);
  }, []);

  const data = useMemo(
    () => ({
      form,
      handleChange,
      resetForm,
      setCharacterToEdition,
    }),
    [form, handleChange, resetForm, setCharacterToEdition]
  );

  return (
    <CharacterFormContext.Provider value={data}>
      {children}
    </CharacterFormContext.Provider>
  );
};

export { CharacterFormContext, CharacterFormProvider };
