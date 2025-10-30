import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { USER_STORAGE_KEY } from "./constants";
import { createToken, decodeToken } from "./utils/tokenHelpers";

const AuthContext = createContext(null);

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuthContext debe ser usado dentro de un AuthProvider");

  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storageToken = localStorage.getItem(USER_STORAGE_KEY);
    return storageToken ? decodeToken(storageToken) : null;
  });

  const login = useCallback((username, role) => {
    const userLog = { username, role };
    setUser(userLog);

    const token = createToken(userLog);
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
    }),
    [login, logout, user]
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { useAuthContext, AuthProvider };
