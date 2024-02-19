import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './componentes/CompenenteRutas';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </div>
  );
}

export default App;
