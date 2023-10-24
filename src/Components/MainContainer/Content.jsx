import React, { Component } from "react";
import Styles from "./__maincon.module.css";
import JSON from "./focus.json";

class Content extends Component {
  state = { JSON };
  render() {
    return (
      <>
        <article className={Styles.focusContainer}>
          <aside className={Styles.focusBlock}>
            <div>
              <h2>Focus</h2>
            </div>
            <div>
              <a href="#">Show all</a>
            </div>
          </aside>
          <main>
            {this.state.JSON[0].map(ele => {
              let { image, title, desc } = ele;
              return (
                <aside className={Styles.focusBox}>
                  <img src={image} alt="img1" />
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <button>
                    <i class="fa-solid fa-play"></i>
                  </button>
                </aside>
              );
            })}
          </main>
        </article>
        <article className={Styles.focusContainer}>
          <aside className={Styles.focusBlock}>
            <div>
              <h2>Spotify playlist</h2>
            </div>
            <div>
              <a href="#">Show all</a>
            </div>
          </aside>
          <main>
            {this.state.JSON[1].map(ele => {
              let { image, title, desc } = ele;
              return (
                <aside className={Styles.focusBox}>
                  <img src={image} alt="img1" />
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <button>
                    <i class="fa-solid fa-play"></i>
                  </button>
                </aside>
              );
            })}
          </main>
        </article>
        <article className={Styles.focusContainer}>
          <aside className={Styles.focusBlock}>
            <div>
              <h2>Sounds of India</h2>
            </div>
            <div>
              <a href="#">Show all</a>
            </div>
          </aside>
          <main>
            {this.state.JSON[2].map(ele => {
              let { image, title, desc } = ele;
              return (
                <aside className={Styles.focusBox}>
                  <img src={image} alt="img1" />
                  <h4>{title}</h4>
                  <p>{desc}</p>

                  <button>
                    <i class="fa-solid fa-play"></i>
                  </button>
                </aside>
              );
            })}
          </main>
        </article>
      </>
    );
  }
}

export default Content;
