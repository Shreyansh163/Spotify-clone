import React from 'react'
import Styles from './__sidebar.module.css'

const Header = () => {
    return (
      <header className={Styles.headerBlock}>
        <div>
          <span>
            <i class="fa-solid fa-house"></i>
          </span>
          <span>Home</span>
        </div>
        <div>
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <span>Search</span>
        </div>
      </header>
    );
}

export default Header