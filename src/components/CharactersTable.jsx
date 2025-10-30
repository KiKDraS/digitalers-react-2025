import { TableHeader } from "./Table/TableHeader";
import { TableBody } from "./Table/TableBody";
import { Button } from "../components/core/Button/Button";
import { Table } from "./Table/Table";
import { Spinner } from "./core/Spinner";
import { useContext } from "react";
import { CharacterFormContext } from "../contexts/CharacterFormContext";
import { useCharactersContext } from "../contexts/CharactersContext";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import { ROLES } from "../contexts/AuthContext/constants";

export const CharactersTable = () => {
  const { setCharacterToEdition } = useContext(CharacterFormContext);
  const { isLoading, error, characters, deleteCharacter } =
    useCharactersContext();
  const { user } = useAuthContext();
  const isAdmin = user.role === ROLES.ADMIN;

  //Renderizado condicional
  if (isLoading) return <Spinner />;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <Table>
      <TableHeader>
        <th>Nombre</th>
        <th>Casa</th>
        {isAdmin && <th>Acciones</th>}
      </TableHeader>
      <TableBody>
        {characters.map((character) => {
          return (
            <tr key={character.id}>
              <td className="col">{character.name}</td>
              <td className="col">{character.house}</td>
              {isAdmin && (
                <td className="col">
                  <div className="d-flex align-items-center gap-4">
                    <Button
                      text="Editar"
                      color="warning"
                      onClick={() => setCharacterToEdition(character)}
                    />
                    <Button
                      text="Borrar"
                      color="danger"
                      onClick={() => deleteCharacter(character.id)}
                    />
                  </div>
                </td>
              )}
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};
