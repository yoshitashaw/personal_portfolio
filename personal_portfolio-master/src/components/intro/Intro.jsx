import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
// import { VscFolderLibrary } from "react-icons/vsc";
// import img from "../../assets/Me.png";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <Lottie animationData={animationData} /> */}
            {/* <img src={img} alt="Yoshita Shaw" /> */}
          {/* </div>
        </div> */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h3>Bachelor's of Engineering</h3>
              <small> Chandigarh University </small>
              <br /> <small> 2021-2025 </small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h3>Intermediate</h3>
              <small> D.B.M.S English School </small>
              <br /> <small> 2019-2020  </small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h3>Matriculation</h3>
              <small> Kerala Samajam Model School </small>
              <br /> <small> 2017-2018 </small>
            </article>
          </div>
          
            <h2>
            I aspire to begin my career in a dynamic and innovative environment, collaborating with industry experts and enhance my skills in 
            Software Development, AI, and Analytics to contribute to the organization's success and growth. 
            </h2>
          
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
