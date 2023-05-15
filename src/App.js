import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Contact } from './Pages';
import { Header, Contact } from './components'

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
