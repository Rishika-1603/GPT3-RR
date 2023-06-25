import React from 'react';
import {RiMenu3Line,RiCloseLin} from 'react-icons/ri';

import logo from '../../assets/gpt3/logo.svg';
import './navbar.css';



const Navbar = () => {
  return (
    <div className="gpt3__navbar">
        <div clasName='gpt3_navbar-links'></div>
           <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo"></img>
           </div>
    </div>
  )
}

export default Navbar