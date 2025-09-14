import React from "react";
import Navigasi from "../../component/Header";
import Footer from "../../component/Footer";
import { NavRightAbout } from "../../component/Navright";

const About = () => {
  return (
    <>
      <Navigasi />
      <div className="container">
        <article>
          <div className="left">
            <h1>halaman about</h1>
          </div>
          <div className="right">
            <NavRightAbout />
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default About;
