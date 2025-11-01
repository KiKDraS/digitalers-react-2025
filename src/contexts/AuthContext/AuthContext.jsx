import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { USER_STORAGE_KEY } from "./constants";
import { createToken, decodeToken } from "./utils/tokenHelpers";

const AuthContext = createContext(null);

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuthContext must be used between an AuthProvider");

  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storageToken = localStorage.getItem(USER_STORAGE_KEY);
    return storageToken ? decodeToken(storageToken) : null;
  });

  const updateName = useCallback((newName) => {
    setUser(newName);

    const token = createToken(newName);
    localStorage.setItem(USER_STORAGE_KEY, token);
  }, []);

  const login = useCallback((username) => {
    setUser(username);

    const token = createToken(username);
    localStorage.setItem(USER_STORAGE_KEY, token);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  }, []);

  const data = useMemo(
    () => ({
      user,
      login,
      logout,
      updateName,
    }),
    [login, logout, updateName, user]
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useAuthContext, AuthProvider };
