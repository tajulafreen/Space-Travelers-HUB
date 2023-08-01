import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>

  );
}

export default App;