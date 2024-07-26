import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MyCourse from './Pages/MyCourse';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound'; // Pastikan Anda memiliki komponen ini
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Pastikan Navbar berada di luar Routes agar muncul di semua halaman */}
        <Routes>
          {/* ADMIN SECTION */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/user/MyCourse" element={<MyCourse />} />
          {/* Route default untuk menangani halaman Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
