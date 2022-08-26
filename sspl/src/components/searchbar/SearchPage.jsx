import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchedItem from './SearchedItem';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [defaultItem, setDefaultItem] = useState();
  const [value, setValue] = useState();

  const fetchData = async () => {
    return await fetch('https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(data => {
         setValue(data) 
         setDefaultItem(data)
       });}

  const updateInput = async (input) => {
     const filtered = defaultItem.filter(item => {
      return item.API.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setValue(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Searched Items</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <SearchedItem value={value}/>
    </>
   );
}

export default SearchPage;