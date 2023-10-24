import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./global.css";
import Maincon from "./Components/MainContainer/Maincon";

const App = () => {
  return (
    <>
      <section id="fullBlock">
        <Sidebar />
        <Maincon />
      </section>
      <article className="signup">
        <aside>
          <p>Preview of Spotify</p>
          <p>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed
          </p>
        </aside>
        <aside>
          <button>
            <span>Sign up free</span>
          </button>
        </aside>
      </article>
    </>
  );
};

export default App;
