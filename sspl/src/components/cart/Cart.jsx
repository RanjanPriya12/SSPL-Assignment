import React, { useContext, useState } from 'react';
import items from "../../data.json";
import { Card } from '../card/Card';
import { ThemeContext } from '../context/themeContext';
import './Cart.css';


export const Cart = () => {
  const [data,setData]=useState(items.data);
  const { Theme } = useContext(ThemeContext);
  
  const deleteHandler = (id) => {
    setData(data.filter((el) => el !== id));
  };

  return (
    <div className='cartContainer' style={Theme?{backgroundColor:"black"}:{backgroundColor:"white"}}>
      {data.map(el=>(
        <div key={el.id}>
          <Card el={el} deleteHandler={deleteHandler}/>
        </div>
      ))}
    </div>
  )
}
