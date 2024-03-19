import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Ticket from './Ticket';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div style={{
        backgroundImage: `url(${require('./bg.jpg')})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif' 
      }}>
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ticket" element={<Ticket />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
