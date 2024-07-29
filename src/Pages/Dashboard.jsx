import React from "react";
import Home from "./../Components/Home/Home";
import Kalender from "./../Components/Home/Kalender";
import Notifikasi from "./../Components/Home/Notifikasi";

const Dashboard = () => {
  return (
    <div>
      <Home />
      <div class="row justify-content-center mt-5">
        <div class="col-6">
          <Kalender />
        </div>
        <div class="col-3">
          <Notifikasi />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
