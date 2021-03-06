import React from "react";
import { Link } from "react-router-dom";

function Navheader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className=" d-flex justify-content-center align-items-center">
          <h5 className="mb-0 ">BANK</h5>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/crediter" className="nav-link">
                Créditer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/debiter" className="nav-link">
                Débiter
              </Link>
            </li>
            <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              déconnexion
            </button>
          </form>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navheader;
