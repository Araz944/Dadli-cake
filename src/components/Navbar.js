//dependencies
import { useState } from "react";
import { Link } from "react-router-dom";

//components
import Player from "./Player";

//includes (images)
import vector from "../images/Navbar.png";

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

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  function toggleClass() {
    setActive(!isActive);
  }

  return (
    <>
      <nav>
        <img src={vector} className="navbarVector" alt="vector" />
        <Player />
        <label onClick={() => toggleClass()}>&#9776;</label>
        <ul
          className={isActive ? "sidebarMenuToggleOn" : "sidebarMenuToggleOff"}
        >
          <li>
            <Link to="/" onClick={() => toggleClass()}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => toggleClass()}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => toggleClass()}>
              About
            </Link>
          </li>
          <li>
            <a href="#contacts" onClick={() => toggleClass()}>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
