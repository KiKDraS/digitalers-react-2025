import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { THEME, THEME_KEY } from "./constants";

const ThemeContext = createContext(null);

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used between a ThemeProvider");
  }

  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem(THEME_KEY);
    return storageTheme ?? THEME.LIGHT; // ?? -> evita usar el primer valor solo si la variable es null/undefined
    // return storageTheme || THEME.LIGHT; // || -> evita usar el primer valor si la variable es falsie
  });
  // theme === "light" ? "dark" : "light"

  useEffect(() => {
    document.body.dataset.bsTheme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    // setTheme((prev) => {
    //   const newTheme = prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

    //   document.body.dataset.bsTheme = newTheme;
    //   localStorage.setItem("theme", newTheme);

    //   return newTheme;
    // });

    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  }, []);

  const data = useMemo(
    () => ({
      theme,
      toggleTheme,
      isLightTheme: theme === THEME.LIGHT,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useThemeContext, ThemeProvider };
