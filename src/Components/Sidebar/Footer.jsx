import React from 'react'
import Styles from './__sidebar.module.css'

const Footer = () => {
  return (
    <footer className={Styles.footerBlock}>
      <aside>
        <div>
          <a href="#">Legal</a>
        </div>
        <div>
          <a href="#">Privacy Center</a>
        </div>
        <div>
          <a href="#">Privacy Policy</a>
        </div>
        <div>
          <a href="#">Cookies</a>
        </div>
        <div>
          <a href="#">About Ads</a>
        </div>
        <div>
          <a href="#">Accessibility</a>
        </div>
        <div>
          <a href="#">Cookies</a>
        </div>
      </aside>

      <aside>
        <button>
          <span>
            <i class="fa-solid fa-globe"></i>
          </span>
          <span>English</span>
        </button>
      </aside>
    </footer>
  );
}

export default Footer