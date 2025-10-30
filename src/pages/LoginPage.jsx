import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <LoginForm />
      </div>
    </div>
  );
};
