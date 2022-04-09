import React from 'react';
import './Navbar.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Navbar() {
  return (
    <nav className="nav">
      <span className="nav__label">categories</span>
      <div className="nav__searchBar">
        <SearchRoundedIcon fontSize="medium"/>
        <input type="text" />
      </div>
      <NotificationsRoundedIcon fontSize="medium"/>
      <AccountCircleRoundedIcon fontSize="large"/>
      <div className="nav__userInfo">
        <span className="nav__userName">Demo User</span>
        <span className="nav__userEmail">demouser@mail.com</span>
      </div>
    </nav>
  )
}

export default Navbar
