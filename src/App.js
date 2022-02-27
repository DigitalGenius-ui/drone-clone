import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<HomePage search={search}/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
