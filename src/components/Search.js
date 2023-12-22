import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/Search.css"
import {FaSearchengin } from 'react-icons/fa'

//TODO: Add the search functionality
const Search = () => {
  return (
    <div className='container'>
      <span className='search'>
       <input type='text' className='search-bar' placeholder='Address / Txn hash' /> 
       <FaSearchengin style={{fontSize: '25px', color: "#317b22"}} className='FaSeachengin'/>
      </span>
    </div>
  )
}

export default Search