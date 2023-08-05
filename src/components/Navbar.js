import React, { useState } from "react";
import "./Navbar.css";
import churchLogo from "../resources/logo-placeholder.webp";
import NavLinks from "./NavLinks";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navBar forlogoAndName">
      <img
        className="navBar__Logo"
        src={churchLogo}
        alt="the church logo"
      ></img>
      <p className="navBar__name">
        <span className="navBar__generalName">
          {" "}
          EVANGELICAL CHURCH ETHIOPIA
        </span>
        <span>MESERETE KIRISTOS</span>
      </p>
<nav>
  {/* <NavLinks /> */}
  <Navigation />
  <MobileNavigation/>
      {/* <ul className="navBar__titles">
        <li> <a href="./About.js">ABOUT</a></li>
        <li> <a href="./Ministries.js">MINISTRIES</a></li>
        <li><a href="./Ministries.js">BULLETIN</a></li>
        <li><a href="./Ministries.js">GIVING</a></li>
        <li> <a href = "./WatchOnline.js" >WATCH ONLINE</a></li>
        <CgMenu
            className="navBar__humburger"
            onClick={() => setOpen(!open)}
          />
          

          <CgClose />
      </ul> */}

      </nav>
    </div>
  );
}

export default Navbar;
