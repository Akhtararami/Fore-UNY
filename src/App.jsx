import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import MyCourse from './Pages/MyCourse'
import Dashboard from './Pages/Dashboard'
import Discuss from './Pages/Discuss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>   
          {/* ADMIN SECTION */}
          <Route path="/Dashboard" element={< Dashboard />} />
          <Route path="/MyCourse" element={< MyCourse />} />
          <Route path="/Discuss" element={< Discuss />} />
        </Routes>
      </BrowserRouter>
    </>
  ) 
}
export default App;
