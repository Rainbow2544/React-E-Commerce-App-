import React from 'react';
import styled from 'styled-components';
import './Navbar.css';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
   
`

const Navbar = () => {
  return (
    <div className='nav-bar_container'>
        <div className='wrapper'>
        
        <div className='left'>
            <Language>En</Language>
            <div className='searchContainer'>
                <input 
                    type="text"
                    placeholder= "Enter your search here"
                    className='nav-input'/>
                <Search style={{ color: "gray", fontSize: 25 }}/>

            </div>
        </div>
        <div className='center'>
            <h1 id='logo'>LAMA.</h1>
        </div>
        <div className='right'>
            <div className='menuItem'>
                REGISTER
            </div>
            <div className='menuItem'>
                SIGN IN
            </div>
            <div className='menuItem'>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                
            </div>
            
        </div>
        </div>
        

    </div>
  )
}

export default Navbar
