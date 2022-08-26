import React from 'react';
import {useNavigate} from 'react-router-dom';

const SearchBar = ({keyword,setKeyword}) => {
    const navigate=useNavigate();
    const clickHandler = (event) => {
        if(event.key==='Enter'){
navigate("/search");
        }
    };
  return (
    <input 
     key="random1"
     value={keyword}
     placeholder={"Search for Items..."}
     onChange={(e) => setKeyword(e.target.value)}

     onKeyPress={clickHandler}
    />
  );
}

export default SearchBar;