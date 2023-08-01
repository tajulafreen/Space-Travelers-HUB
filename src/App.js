import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import routes from './components/routess';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      {routes.map((route) => (
        
            <Route
              key={route.id}
              path={route.path}
              element={route.element}
            />
          ))}
      </Routes>
    </>

  );
}

export default App;