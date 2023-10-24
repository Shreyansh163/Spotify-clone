import React from 'react'
import Styles from './__maincon.module.css'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'

const Maincon = () => {
  return (
    <>
      <article className={Styles.maincontainer}>
        <Navbar />
        <Content />
        <Footer />
      </article>
    </>
  );
}

export default Maincon