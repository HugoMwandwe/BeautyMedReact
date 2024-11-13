import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SalonPage from './pages/SalonPage';
import DoctorPage from './pages/DoctorPage';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <Navbar />
      <img src={logo} alt="Logo" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/salon" element={<SalonPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
