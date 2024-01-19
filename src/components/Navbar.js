import React from 'react';
import "../styles/Navbar.css";
import { TbZoomScan } from "react-icons/tb";


const Navbar = () => {
  return (
    <div className='nav'> 
    <div className='nav-links'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </div>
      <section className='nav-section'> 
      <TbZoomScan className='search-icon'/>
      <span>SimpleScan</span>
      <h1>The Simplest Ethereum Block Explorer</h1>
      <p>Built Using Alchemy API's and SDK</p>
     
      </section>
     
      </div>
  )
}

export default Navbar