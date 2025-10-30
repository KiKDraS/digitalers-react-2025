import React from "react";
import { CharacterFormProvider } from "../contexts/CharacterFormContext";
import { CharactersProvider } from "../contexts/CharactersContext";
import { CharacterForm } from "../components/CharacterForm";
import { CharactersTable } from "../components/CharactersTable";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import { ROLES } from "../contexts/AuthContext/constants";

export const HomePage = () => {
  const { user } = useAuthContext();

  return (
    <section className="container-lg p-4 d-flex flex-column gap-4">
      <CharacterFormProvider>
        <CharactersProvider>
          {user.role === ROLES.ADMIN && (
            <div className="w-50">
              <CharacterForm />
            </div>
          )}
          <CharactersTable />
        </CharactersProvider>
      </CharacterFormProvider>
    </section>
  );
};
