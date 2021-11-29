import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="logo">
        <img src="https://cdn.iconscout.com/icon/free/png-256/airbnb-1869032-1583156.png" alt="logo-full" />
      </div>

      {/* RIGHT */}
      <div className="user__menu">
        <div className="host__menu">
          <div className="become__host">
            <h3>Become a Host</h3>
          </div>
          <LanguageIcon fontSize="small" className="language__icon"/> 
        </div>
        <div className="login__menu">
          <MenuIcon fontSize="small" className="menu__icon"/>
          <AccountCircleIcon className="account__icon"/>
        </div>
      </div>
    </header>
  )
}

export default Header
