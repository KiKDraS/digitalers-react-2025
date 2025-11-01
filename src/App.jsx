import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/components/Layout";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./pages/components/ProtectedRoute";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/components/SettingsPage";
import { ROUTES } from "./pages/constants";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          {/* <Layout> */}
          <Routes>
            <Route element={<Layout />}>
              {/* Rutas Públicas */}
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />

              {/* Rutas Privadas */}
              <Route element={<ProtectedRoute />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
              </Route>

              {/* 
                * => Para cualquier ruta que no se encuentre escrita en este Routes, 
                mostrá el component NotFoundPage
              */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            {/* Rutas Públicas */}
            {/* <Route path="/login" element={<LoginPage />} /> */}

            {/* Rutas Privadas */}
            {/* <Route element={<ProtectedRoute />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
              </Route> */}
          </Routes>
          {/* </Layout> */}
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
