import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import "./navbar.css";
export default function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;
  return (
  <header className="navbar">
    <div className="nav-inner">
      <NavLink className="logo" to={"/"}>&lt;DEBA&gt;</NavLink >
      <nav className={`nav-links ${isOpen ? "open" : ""}`} aria-label="Primary">
        <NavLink aria-label="home" to={"/"} onClick={()=> setIsOpen(!isOpen)} >Home</NavLink >
        <NavLink aria-label="about" to={"/about"} onClick={()=> setIsOpen(!isOpen)} >About</NavLink >
        <NavLink aria-label="tech stack" to={"/techstack"} onClick={()=> setIsOpen(!isOpen)} >Skills</NavLink >
        <NavLink aria-label="projects" to={"/projects"} onClick={()=> setIsOpen(!isOpen)} >Projects</NavLink >
        <NavLink aria-label="achievements" to={"/achievements"} onClick={()=> setIsOpen(!isOpen)} >Achievements</NavLink >
        <NavLink aria-label="contact" to={"/contact"} onClick={()=> setIsOpen(!isOpen)} >Contact</NavLink >
      </nav>
      <div className="cta">
        {
          location.startsWith("/admin") ? "" :
          <ThemeToggler />
        }
        <button aria-label="nav-links-bar" className="menu-toggle" onClick={()=> setIsOpen(!isOpen)}><i className="fa-solid fa-bars"></i></button>
      </div>
    </div>
    <div className="nav-gold-line">
      <div className="gold-runner"></div>
    </div>
  </header>
  );
}
