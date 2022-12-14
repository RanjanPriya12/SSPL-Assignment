
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Routes, Route} from 'react-router-dom';
import { Home } from './components/home/Home';
import { useContext } from 'react';
import { ThemeContext } from './components/context/themeContext';
import { SearchPAge } from './components/searchPage/SearchPAge';
import { Cart } from './components/cart/Cart';

function App() {
  const {Theme}=useContext(ThemeContext);
  return (
    <div className="App" style={Theme?{backgroundColor:"black"}:{backgroundColor:"white"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchPAge/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
