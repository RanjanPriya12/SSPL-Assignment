import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { ThemeContext } from '../context/themeContext';
import axios from "axios";
import './Cart.css';


export const Cart = () => {
  const [data,setData]=useState([]);
  const { Theme } = useContext(ThemeContext);

  const getData=async()=>{
      try {
        const res= await axios.get(`http://localhost:8080/data`);
        const data=res.data;
        setData(data);
      } catch (error) {
        console.log('error',error);
      }
  }


  useEffect(()=>{
    getData();
  },[]);
  
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
