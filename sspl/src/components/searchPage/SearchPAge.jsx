import React from 'react'
import { Card } from '../card/Card';
import './Search.css';

export const SearchPAge = () => {
    const searchedItems=JSON.parse(localStorage.getItem('searched'));

  return (
    <div className='searchConatiner'>
        {
            searchedItems.map(el=>(
                <div key={el.id}>
                    <Card el={el}/>
                </div>
            ))
        }
    </div>
  )
}
