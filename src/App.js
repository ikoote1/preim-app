import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<home />} />
        <Route path="/product" element={<product />} />
        <Route path="order" element={<order />} />
      </Routes>
     <h1>ikoote</h1>
    </div>
  );
}

export default App;
