import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LikedItems from './pages/LikedItems';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/like" element={<LikedItems/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
