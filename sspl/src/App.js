
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Routes, Route} from 'react-router-dom';
import { Home } from './components/home/Home';
import { Cart } from './components/cart/Cart';
import { useContext } from 'react';
import { ThemeContext } from './components/context/themeContext';
import SearchedItem from './components/searchbar/SearchedItem';

function App() {
  const {Theme}=useContext(ThemeContext);
  return (
    <div className="App" style={Theme?{backgroundColor:"black"}:{backgroundColor:"white"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/search' element={<SearchedItem/>}/>
      </Routes>
    </div>
  );
}

export default App;
