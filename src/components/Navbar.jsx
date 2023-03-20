import React from 'react';
import styled from 'styled-components';
import './Navbar.css';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

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
                <Search/>
                
                <ShoppingCartOutlined/>
            </div>
        </div>
        <div className='center'>center</div>
        <div className='right'>right</div>
        </div>
        

    </div>
  )
}

export default Navbar
