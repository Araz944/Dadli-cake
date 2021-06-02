//dependencies
import React, { useState, useEffect } from "react";

//components

//includes (images)
import logo from "../images/logo.png";

//includes (.css files)
import "../style/index.css";
import "../style/media-Mobile-S-320px.css";
import "../style/media-Mobile-M-360px.css";
import "../style/media-Mobile-M-375px.css";
import "../style/media-Mobile-L-384px.css";
import "../style/media-Mobile-L-414px.css";
import "../style/media-Mobile-Landscape-480px.css";
import "../style/media-Mobile-Landscape-568px.css";
import "../style/media-Mobile-Landscape-592px.css";
import "../style/media-Mobile-Landscape-640px.css";
import "../style/media-Mobile-Landscape-667px.css";
import "../style/media-Mobile-Landscape-736px.css";
import "../style/media-Mobile-Landscape-800px.css";
import "../style/media-4K-2560px.css";

//includes (music)
import themeMusic from "../music/Lifeafter-Hope-101-music.mp3";

const useAudio = () => {
  const [player] = useState(new Audio(themeMusic));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? player.play() : player.pause();
  }, [playing]);

  useEffect(() => {
    player.addEventListener("ended", () => setPlaying(false));
    return () => {
      player.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = () => {
  const [playing, toggle] = useAudio(themeMusic);

  return (
    <div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
      <input
        type="image"
        value="image"
        src={logo}
        className="logo-png"
        alt="logo"
        onClick={toggle}
      />
    </div>
  );
};

export default Player;
