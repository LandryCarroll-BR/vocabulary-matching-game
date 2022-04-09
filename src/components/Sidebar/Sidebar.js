import React from 'react';
import './Sidebar.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

function Sidebar() {
  return (
    <aside className="sidebar">
      <span className="sidebar__logo">Vocab Game</span>
      <nav className="sidebar__nav">
        <div className="sidebar__navEl">
          <HomeRoundedIcon />
          <span>Home</span>
        </div>
        <div className="sidebar__navEl sidebar__navEl--active">
          <ViewListRoundedIcon />
          <span>Games List</span>
          <ArrowDropDownRoundedIcon />
        </div>
        <div className="sidebar__navDropdown sidebar__navDropdown--active">
          <div className="sidebar__navDropdownEl">
            <span>Game 1</span>
            <ArrowRightRoundedIcon />
          </div>
          <div className="sidebar__navDropdownEl">
            <span>Game 2</span>
            <ArrowRightRoundedIcon />
          </div>
          <div className="sidebar__navDropdownEl sidebar__navDropdownEl--active">
            <span>Game 3</span>
            <ArrowRightRoundedIcon />
          </div>
          <div className="sidebar__navDropdownEl">
            <span>Game 3</span>
            <ArrowRightRoundedIcon />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
