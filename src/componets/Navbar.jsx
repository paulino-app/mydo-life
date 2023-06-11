import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
  const { handleEnlanceClick } = props;

  const location = useLocation();

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 13 }}>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: 'white', padding: 12, height: 100 }}
      >
        <div className="container-lg">
          <button
            className="navbar-toggler mb-4 mt-3 border border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse mb-5 mb-sm-5 mb-md-5 mb-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto">
              <li
                className="nav-item mb-3 mb-sm-3 mb-md-0"
                style={{ marginRight: 30 }}
              >
                <Link
                  to="/#inicio"
                  id="nav-link1"
                  className={
                    location.hash === '' || location.hash === '#inicio'
                      ? 'active'
                      : 'link'
                  }
                  onClick={() => {
                    handleEnlanceClick('#inicio');
                  }}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item mb-3 mb-sm-3 mb-md-0">
                <Link
                  to="/#nosotros"
                  id="nav-link2"
                  className={location.hash === '#nosotros' ? 'active' : 'link'}
                  onClick={() => {
                    handleEnlanceClick('#nosotros');
                  }}
                >
                  Nosotros
                </Link>
              </li>
            </ul>

            <div id="title">
              <img src="./images/logo.png" alt="Mydolife" />
            </div>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item mb-3 mb-sm-3 mb-md-0">
                <Link
                  to="/#equipo"
                  id="nav-link3"
                  className={location.hash === '#equipo' ? 'active' : 'link'}
                  style={{ marginRight: 30 }}
                  onClick={() => {
                    handleEnlanceClick('#equipo');
                  }}
                >
                  Equipo
                </Link>
              </li>

              <li className="nav-item mb-3 mb-sm-3 mb-md-0">
                <Link
                  to="/#contacto"
                  id="nav-link4"
                  className={location.hash === '#contacto' ? 'active' : 'link'}
                  onClick={() => {
                    handleEnlanceClick('#contacto');
                  }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div id="title2">
            <img src="./images/logo.png" alt="Mydolife"/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
