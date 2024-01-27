import React from 'react'
import { Link } from "react-router-dom";

import "../styles/Header.css";
const Header = () => { 
  return (
    <div className= "intro">
    <div className="left">
      <h2>Hey 🖐️! MD FURKAN</h2>
      <h1>
        I am a <span>Full Stack Developer</span>
      </h1>
      <p>
      I'm a passionate Computer Science undergrad aspiring to excel as a software developer. With a focus on web development, competitive programming, and open source, I'm building a strong foundation. Blend technical skills with problem-solving, engage in projects and collaboration, and my journey will lead to success.
      </p> 
    <Link to="/Contact"> <button className="intro-btn all-btn">hire me</button></Link> 
    <Link to="https://drive.google.com/file/d/1bfFHQqPvak80fwmjSPxIFrYuDDuvvXKY/view?usp=drive_link" target="_blank" rel="noreferrer"> <button className="intro-btn all-btn">get cv</button></Link> 
    </div>

    <div className="right">
      <div className="img-stack">
        <img
          src="https://static.theprint.in/wp-content/uploads/2022/10/poor.jpg"
          alt=""
          width="450px"
          height="450px" 
          className="img"
        />
      </div>
    </div>
  </div>
  )
}

export default Header
