import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");
  const audioRef = useRef(null);

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

  function playMusic() {
    const music = audioRef.current;
    if (!music) return;

    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }

  return (
    <div className="nav">
      <div className="nav-start">
        <Link to="/">
         <img
          src="https://img.icons8.com/?size=100&id=gpEXladfxpZd&format=png&color=1A1A1A"
          alt="logo"
          className="icon-home"
        />
        </Link>
       

        <Link to="/" className="name" style={{ paddingLeft: "0.8em" }}>
          mayank.is-dev
        </Link>

        <div className="nav-links">
          <Link to="/" className="home">Home</Link>
        
        <div>
           <a
            href="https://www.linkedin.com/in/mayank-kumar-42139621a/"
            target="_blank"
            rel="noreferrer"
            className="home"
          >
            Linkedin
              <img
          src="https://img.icons8.com/?size=100&id=60664&format=png&color=1A1A1A"
          alt="Link"
          style={{height: "0.9em", width: "1em", paddingLeft: "0.3em",}}
 
        />
          </a>
        </div>
         
  <div>
          <a
            href="https://drive.google.com/file/d/1VyAPpX0a5qW4yDBw5Dvxibu8R75wU2h0/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="home"
          >
            Resume
               <img
          src="https://img.icons8.com/?size=100&id=60664&format=png&color=1A1A1A"
          alt="Link"
          style={{height: "0.9em", width: "1em", paddingLeft: "0.3em"}}
 
        />
          </a>
          </div>
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
          <div className="time-text">{currentTime}</div>
        </div>

        {/* 🎵 AUDIO */}
        <audio
          ref={audioRef}
          src="/src/assets/andriig-relax-relaxing-music-487214.mp3"
          preload="auto"
        />

        {/* 🎵 PLAY / PAUSE BUTTON */}
        <img
          src="https://img.icons8.com/?size=100&id=aanJRSdBR4ug&format=png&color=000000"
          alt="music"
          className="icon"
          onClick={playMusic}   
        />

        <img
          src="https://img.icons8.com/?size=100&id=45474&format=png&color=000000"
          alt="mode"
          className="icon"
        />

        <a href="https://github.com/mkr45" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
            alt="GitHub"
            className="icon-github"
          />
        </a>
      </div>
    </div>
  );
}