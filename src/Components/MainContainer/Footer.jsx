import React from "react";
import Styles from "./__maincon.module.css";

const Footer = () => {
  return (
    <section id={Styles.footerContainer}>
      <article>
        <aside>
          <p>Company</p>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="">For the Record</a>
            </li>
          </ul>
        </aside>
        <aside>
          <p>Communities</p>
          <ul>
            <li>
              <a href="#">For Artists</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Vendors</a>
            </li>
            <li>
              <a href="#">Spotify for Work</a>
            </li>
          </ul>
        </aside>
        <aside>
          <p>Useful links</p>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Free Mobile App</a>
            </li>
          </ul>
        </aside>
        <aside className={Styles.iconBlock}>
          <div>
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
          </div>
          <div>
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
          </div>
          <div>
            <span>
              <i class="fa-brands fa-facebook"></i>
            </span>
          </div>
        </aside>
      </article><hr />
      <div>
        <p>© 2023 Spotify AB</p>
      </div>
    </section>
  );
};

export default Footer;
