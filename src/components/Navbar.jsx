import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {

    function getCurrentTime24Hour() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }

    getCurrentTime24Hour(); 
    const intervalId = setInterval(getCurrentTime24Hour, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="nav">
      <div className="nav-start" >
        <img
          src="https://img.icons8.com/?size=100&id=gpEXladfxpZd&format=png&color=1A1A1A"
          alt="music"
          className="icon"
        />
         <Link to="/" className="name" style={{paddingLeft: "0.8em"}}>mayank.is-dev</Link>
        <div className="nav-links">
      
            <Link to="/" className="home">Home</Link>
          
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mayank-kumar-42139621a/"
            className="home"
          >
            Linkedin
          </a>
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1VyAPpX0a5qW4yDBw5Dvxibu8R75wU2h0/view?usp=sharing" className="home">
            Resume
          </a>
        </div>
      </div>

      <div className="nav-end">
        <div className="time">
          <DotLottieReact
            src="https://lottie.host/8e41ff83-3b2c-4705-b432-7747ebea5e19/T6AC18Blaf.lottie"
            loop
            autoplay
            className="green-icon"
          />
          <div className="time-text">
          {currentTime}
          </div>  
        </div>

        <img
          src="https://img.icons8.com/?size=100&id=aanJRSdBR4ug&format=png&color=000000"
          alt="music"
          className="icon"
        />
        <img
          src="https://img.icons8.com/?size=100&id=45474&format=png&color=000000"
          alt="mode"
          className="icon"
        />
        <a href="https://github.com/mkr45"
           target="_blank"
           el="noreferrer">
        <img
          src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
          alt="GitHub"
          className="icon"
        />
        </a>
        
      </div>
    </div>
  );
}