import './App.css';
import Banner from './components/Banner/Banner';
import Category from './components/category/Category';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <Products/>
      <Category/>
    </div>
  );
}

export default App;
