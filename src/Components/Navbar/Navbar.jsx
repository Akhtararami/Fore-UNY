import React from "react";
import logo from "../../assets/icon/main/logo.png";
import profilpic from "../../assets/icon/navbar/hitam.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              style={{ height: "50px", borderRadius: "30px" }}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-none d-lg-flex"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-5">
              <li className="nav-item ms-5">
                <Link className="nav-link fs-5" to="Dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link fs-5" to="myCourse">
                  My Course
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link fs-5" to="Discuss">
                  Discuss
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a
                  className="user-link fs-5 text-light text-decoration-none me-5"
                  href="#"
                >
                  Ambatukam
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  {" "}
                  <img
                    src={profilpic}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "30px",
                    }}
                    alt="user"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-start d-lg-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link fs-5 text-light" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 text-light" href="#">
                  MyCourse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 text-light" href="#">
                  Course
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
