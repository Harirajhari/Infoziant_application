// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css'; // Custom CSS for the header
import logo from '../../assests/images/logo.png';

function Header() {
    return (
        <header className="custom-header bg-transparent-50">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Infoziant Logo" className="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/features">Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/products">Products</Link>
                    <div className="underline"></div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/clients">Clients</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      );
}

export default Header;
