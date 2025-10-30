import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CharactersContext = createContext(null);

const useCharactersContext = () => {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error(
      "useCharactersContext must be used between a CharactersProvider"
    );
  }

  return context;
};

const BASE_URL = "https://63c3312d8bb1ca34755ea0d1.mockapi.io/characters";

const CharactersProvider = ({ children }) => {
  // representa los personajes almacenados en la API de Mock API
  const [characters, setCharacters] = useState([]);
  // representa la API de Mock API ya respondió
  const [isLoading, setIsLoading] = useState(true);
  // representa si hubo un error en la comunicación con la API de Mock API
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

  const data = useMemo(() => {
    return {
      characters,
      isLoading,
      error,
      addCharacter,
      editCharacter,
      deleteCharacter,
    };
  }, [characters, error, isLoading]);

  return (
    <CharactersContext.Provider value={data}>
      {children}
    </CharactersContext.Provider>
  );
};

export { useCharactersContext, CharactersProvider };
