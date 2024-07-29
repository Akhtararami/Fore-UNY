import React from "react";
import icon from "../../assets/icon/main/notifikasi.png";
import "./Home.css";

const Notifikasi = () => {
  return (
    <>
      <h1 className="fw-semibold">Notifikasi</h1>
      <div className="" style={{ maxHeight: "350px", overflowY: "auto" }}>
        <div
          className="card-notif custom-card mb-3"
          style={{
            maxWidth: "800px",
            height: "100px",
            overflow: "hidden",
            borderRadius: "5px",
          }}
        >
          <div className="row g-0">
            <div className="col-md-2">
              <img
                src={icon}
                className="img-fluid rounded-start mt-3"
                alt=""
                style={{
                  maxHeight: "100%",
                  objectFit: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </div>
            <div className="col-md-8">
              <div
                className="card-body lh-1 mt-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  height: "100%",
                }}
              >
                <h5 className="card-title mt-2 text-light lh-1">
                  Tugas Mencintai diri sendiri
                </h5>
                <p className="card-text text-light ">
                  Tugas harus dikumpulkan dalam 24 jam
                </p>
              </div>
            </div>
          </div>
        </div>

        {}
      </div>
    </>
  );
};

export default Notifikasi;
