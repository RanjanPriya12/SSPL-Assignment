
import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import './Card.css';

export const Card=({el,deleteHandler})=>{
  const {Theme}=useContext(ThemeContext);
   return (
    <div className='cardContainer' style={Theme?{backgroundColor:"teal", color:"white"}:{backgroundColor:"white", color:"black"}}>
      <div className='imageContainer'>
        <img src={el.image} alt="pic" />
      </div>
      <h2>{el.username}</h2>
      <p>{el.comment}</p>
      <div className='flex'>
        <span>{el.degree}</span>
        <span><b>{el.likes}</b></span>
      </div>
      <button onClick={()=>deleteHandler(el)} style={Theme?{backgroundColor:"black", color:"white"}:{backgroundColor:"teal", color:"white"}}>Remove</button>
    </div>
  );
}

