import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import SearchBar from '../searchbar/SearchBar';
import './Navbar.css';

export const Navbar = () => {
  const {Theme, handleTheme}= useContext(ThemeContext);
  return (
    <div className='navbar'>
            <li className='serchbar'><SearchBar/></li>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/cart'>Cart</Link></li>
            <li><button style={{color:"white"}} onClick={()=>{handleTheme()}}>{Theme?"Light":"Dark"}</button></li>
    </div>
  )
}

