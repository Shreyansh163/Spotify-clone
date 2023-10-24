import React from "react";
import Styles from "./__sidebar.module.css";

const Slider = () => {
  return (
    <main className={Styles.sliderBlock}>
      <aside>
        <span>
          <i class="fa-solid fa-bars"></i>
        </span>
        <span>Your Library</span>
        <button>
          <i class="fa-solid fa-plus"></i>
        </button>
      </aside>

      <aside>
        <main className={Styles.sliderScroll}></main>
        <div>
          <p>Create your first playlist</p>
          <p>It's easy we will help you</p>
          <button>
            <span>Create playlist</span>
          </button>
        </div>
        <div>
          <p>Let's find some podcasts to follow</p>
          <p>We'll keep you updated on new episodes</p>
          <button>
            <a href="#">
              <span>Browse podcasts</span>
            </a>
          </button>
        </div>
      </aside>
    </main>
  );
};

export default Slider;
