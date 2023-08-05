import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const humbergerIcon = (
    <CgMenu
      className="navigationLinks__mobile__hamburger"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose
      className="navigationLinks__mobile__hamburger"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <div>
      <nav className="navigationLinks__mobile">
        {/* <CgMenu
          className="navigationLinks__mobile__hamburger"
          onClick={() => setOpen(!open)}
        /> */}
        {open ? closeIcon : humbergerIcon}

        {open && <NavLinks />}
      </nav>
    </div>
  );
}

export default MobileNavigation;
