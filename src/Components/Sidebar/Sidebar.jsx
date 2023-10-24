import React from "react";
import Styles from "./__sidebar.module.css";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";

const Sidebar = () => {
  return (
      <aside className={Styles.sidebar}>
          <Header />
          <Slider />
          <Footer />
    </aside>
  );
};

export default Sidebar;
