import React, { useContext } from "react";
import { Typewriter }  from 'react-simple-typewriter';
import debaimg from "./image-removebg-preview.webp" ;
import debaimgwhite from "./deba-img-white.webp";
import "./landingPage.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
const LandingPage = React.memo(() => {
    const{theme} = useContext(ThemeContext);
  return (
    <main id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="intro">Hi, I am <span className="name">Debashish Sahu</span></p>
          <h1 className="role">I am <span className="role-highlight" >
            <Typewriter 
              words = {["a Fullstack Developer", "a UI/UX Designer", "an Artist"]}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
             />
              </span>
        </h1>
          <p className="desc">
            I like to code, build complex projects and to enhance my problem solving skills.
            Want to implement my skills in real world problems.
          </p>
          <div className="cta-btns">
            <div className="cta">
                <NavLink className="hire" to={"/footer"} aria-label="Here me button">Hire Me</NavLink >
            </div>
            <a className="talk-btn" target="_blank" href="https://wa.me/917043691404?text=Hi,%20I%20am%20" rel="noopener noreferrer" aria-label="lets talk"><i className="fab fa-whatsapp"></i></a>
            <a className="talk-btn" href="https://www.linkedin.com/in/debashish-sahu-cs/" target="_blank" aria-label="linked-in" ><i className="fab fa-linkedin"></i></a>
            <a className="talk-btn" href="https://github.com/Debashish-Sahu-cs" target="_blank" aria-label="github" ><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="hero-right">
            {
                theme ?  <div className="floating-card" ><img src={debaimgwhite} alt="Debashish Portrait" id="my-img-inwhite" /></div>
                :
                <div className="floating-card" ><img src={debaimg} alt="Debashish Portrait" id="my-img" /></div>
            }
        </div>
      </div>
    </main>
  )
});
export default LandingPage;