import React from 'react'

function Header() {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="logo">
        <img src="https://cdn.iconscout.com/icon/free/png-256/airbnb-1869032-1583156.png" alt="logo-full" />
      </div>

      {/* RIGHT */}
      <div className="user_menu">
        <div className="host__menu">
          <h3>Become a Host</h3>
        </div>
        <div className="login_menu">

        </div>
      </div>
    </header>
  )
}

export default Header
