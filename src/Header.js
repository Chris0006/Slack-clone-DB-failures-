import React from 'react';
import "./Header.css";
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <Avatar className="header__avatar" alt='User 1' src=''></Avatar>
            <AccessTimeIcon/>
        </div>

        <div className='header__search'>
            <SearchIcon/>
            <input id="search-placeholder" placeholder='Search Slack'></input>
        </div>

        <div className='header__right'>
            <HelpOutlineIcon/>
        </div>
    </div>
  )
}

export default Header