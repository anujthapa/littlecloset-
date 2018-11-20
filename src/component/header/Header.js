import React from 'react'
import './header.css';

import logo from '../../images/logo_2.png';

class Header extends React.Component{
    render(){
        return(<div className="header">
        <div className="logo">
        <img src={logo} />
        <h1>Little Closet</h1>
        </div>
        <div className="navigation">
        <ul>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Home Deco</li>
        <li>Contact</li>
        </ul>
        </div>
        
        </div>)
    }
}

export default Header;