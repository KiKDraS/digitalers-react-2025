import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/components/Layout";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./pages/components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas Privadas */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
