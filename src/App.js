import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import routes from './components/routess';
import Header from './components/header/Header';


function App() {
  return (
    <>
      <Header links={routes} />
      <Routes>
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