import { useEffect, useState } from "react";
import "./App.css";
import { CharacterForm } from "./components/CharacterForm";
import { CharactersTable } from "./components/CharactersTable";
import { useForm } from "./components/Form/hooks/useForm";

const INITIAL_FORM = {
  name: "",
  house: "",
  id: null,
};

const BASE_URL = "https://63c3312d8bb1ca34755ea0d1.mockapi.io/characters";

function App() {
  const { form, handleChange, updateForm } = useForm(INITIAL_FORM);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //GET
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Error fetching characters list");
        setCharacters(await res.json());
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCharacters();
  }, []); //[] -> vacío para que solo se pidan cuando el componente se monta por primera vez

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación con early return
    if (!form.name || !form.house) {
      alert("Debes completar todos los datos");
      return;
    }

    if (form.id) editCharacter(form);
    else addCharacter(form);

    resetForm();
  };

  const resetForm = () => {
    updateForm(INITIAL_FORM);
  };

  const setCharacterToEdition = (character) => {
    updateForm(character);
  };

  // POST
  const addCharacter = async (newCharacter) => {
    // const newCharacters = characters.map(el => el);
    // newCharacters.push({
    //   ...formData,
    //   id: characters.length + 1
    // })
    // setCharacters(newCharacters);

    // const newCharacter = {
    //   ...formData,
    //   id: characters.length + 1,
    // };

    // setCharacters((prev) => [...prev, newCharacter]);

    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newCharacter),
        headers: {
          "content-type": "application/json", //Le aviso al servidor que le mando un Objeto JSON
        },
      };

      const res = await fetch(BASE_URL, options);
      if (!res.ok) throw new Error("Error creating new character");

      const createdCharacter = await res.json();
      setCharacters((prev) => [...prev, createdCharacter]);
    } catch (error) {
      setError(error.message);
    }
  };

  // PUT
  const editCharacter = async (editedCharacter) => {
    // setCharacters((prev) =>
    //   prev.map((character) =>
    //     character.id === editedCharacter.id ? editedCharacter : character
    //   )
    // );

    try {
      const options = {
        method: "PUT",
        body: JSON.stringify(editedCharacter),
        headers: {
          "content-type": "application/json", //Le aviso al servidor que le mando un Objeto JSON
        },
      };

      const res = await fetch(`${BASE_URL}/${editedCharacter.id}`, options);
      if (!res.ok) throw new Error("Error updating character");

      const updatedCharacter = await res.json();
      setCharacters((prev) =>
        prev.map((character) =>
          character.id === updatedCharacter.id ? updatedCharacter : character
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE
  const deleteCharacter = async (id) => {
    // setCharacters((prev) => prev.filter((character) => character.id !== id));

    try {
      const options = {
        method: "DELETE",
      };

      const res = await fetch(`${BASE_URL}/${id}`, options);
      if (!res.ok) throw new Error("Error deleting character");

      const deletedCharacter = await res.json();
      setCharacters((prev) =>
        prev.filter((character) => character.id !== deletedCharacter.id)
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="container-lg p-4 d-flex flex-column gap-4">
      <div className="w-50">
        <CharacterForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
        />
      </div>
      <CharactersTable
        setCharacterToEdition={setCharacterToEdition}
        characters={characters}
        deleteCharacter={deleteCharacter}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
}

export default App;
