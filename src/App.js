import './App.css';
import { Routes, Route } from 'react-router-dom';
import home from './components/home';
import product from './components/product';
import order from './components/order';

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
