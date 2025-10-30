import React from "react";
import { Button } from "../../components/core/Button/Button";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

export const Navbar = () => {
  const { logout, user } = useAuthContext();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </Link>
        {user && (
          <>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Button color="danger" onClick={logout} text="Cerrar sesión" />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
