import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand" onClick={() => { }}>CRUDy-Spring-React</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">Add</Link>
              </li>
              <li className="nav-item">
                <Link to="/viewAll" className="nav-link">View All</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/Search" className="btn btn-outline-success">Search</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
