import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import "./Navbar.css";

export const Navbar = () => {
  const { Theme, handleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const query = document.querySelector("#input").value;
      const res = await fetch(`http://localhost:8080/data?q=${query}`);
      const data = await res.json();
      // console.log("Data:", data);
      const search=document.getElementById('input');
      search.addEventListener('keypress',(event)=>{
        if(event.key=='Enter' && data){
          // window.localStorage.removeItem('searched');
          window.localStorage.clear();
            localStorage.setItem('searched',JSON.stringify(data));
            navigate('/search');
            window.location.reload(true);
        }
    });
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <div className="navbar">
      <li className="serchbar">
        <input
          id="input"
          onKeyPress={getData}
          type="text"
          placeholder="Search your items..."
        />
      </li>
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link" to="/cart">
          Cart
        </Link>
      </li>
      <li>
        <button
          style={{ color: "white" }}
          onClick={() => {
            handleTheme();
          }}
        >
          {Theme ? "Light" : "Dark"}
        </button>
      </li>
    </div>
  );
};
