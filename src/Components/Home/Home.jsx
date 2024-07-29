import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Home.css"; // Pastikan untuk mengimpor file CSS yang dibuat

const Home = () => {
  return (
    <div className="container mt-4">
      <h1>Task</h1>
      <div className="card-container">
        <div className="card-wrapper ">
          <div className="card h-100 p-2">
            <div className="card-body border border-primary">
              <div
                className="btn-group mb-2"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck1"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  <FontAwesomeIcon icon={faCheck} className="mt-2" />
                </label>
              </div>
              <h5 className="card-title">Tugas 1 Bab 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                dicta consectetur explicabo at omnis soluta.
              </p>
              <hr />
              <div className="text d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <p className="mb-0 fw-semibold">12 Februari 2024</p>
                </div>
                <a href="#" className="btn btn-primary ml-3">
                  Submit Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrapper ">
          <div className="card h-100 p-2">
            <div className="card-body border border-primary">
              <div
                className="btn-group mb-2"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck1"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  <FontAwesomeIcon icon={faCheck} className="mt-2" />
                </label>
              </div>
              <h5 className="card-title">Tugas 1 Bab 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                dicta consectetur explicabo at omnis soluta.
              </p>
              <hr />
              <div className="text d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <p className="mb-0 fw-semibold">12 Februari 2024</p>
                </div>
                <a href="#" className="btn btn-primary ml-3">
                  Submit Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrapper ">
          <div className="card h-100 p-2">
            <div className="card-body border border-primary">
              <div
                className="btn-group mb-2"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck1"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  <FontAwesomeIcon icon={faCheck} className="mt-2" />
                </label>
              </div>
              <h5 className="card-title">Tugas 1 Bab 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                dicta consectetur explicabo at omnis soluta.
              </p>
              <hr />
              <div className="text d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <p className="mb-0 fw-semibold">12 Februari 2024</p>
                </div>
                <a href="#" className="btn btn-primary ml-3">
                  Submit Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
