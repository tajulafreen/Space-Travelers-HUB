import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;