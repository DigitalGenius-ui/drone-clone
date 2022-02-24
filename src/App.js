import './App.css';
import Banner from './components/Banner/Banner';
import Category from './components/category/Category';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Learning from './components/Learning/Learning';
import Hire from './components/Hire/Hire';
import Interview from './components/Interview/Interview';
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <Products/>
      <Category/>
      <Learning/>
      <Hire/>
      <Interview />
      <Subscribe />
      <Footer/>
    </div>
  );
}

export default App;
