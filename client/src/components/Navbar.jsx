import React, { useState, useEffect, useContext } from "react";
import "../styles/Navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { BiDonateBlood } from "react-icons/bi";

import { GrClose } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150
        ? setStickyClass("sticky-nav-come")
        : setStickyClass("");
    }
  };

  const [clickMenu, setClickMenu] = useState(false);
  const ClickMenuIcons = () => {
    setClickMenu(!clickMenu);
  };
  const navigateDonate = () => {
    navigate("/donate");
  };

  const [pathname, setPathname] = useState("");
  useEffect(() => {
    if (location.pathname === "/contact") setPathname("contact");
    if (location.pathname === "/about") setPathname("about");
    if (location.pathname === "/") setPathname("home");
    if (location.pathname === "/check-poverty") setPathname("checkpoverty");
  }, [pathname]);

  return (
    <>
      <div className={`main-navbar  ${stickyClass} `}>
        <div>
          <h2 className="main-navbar-logo">
            <Link to="/">Furkan</Link>
          </h2>
        </div>

        <div className="navbar-section">
          <ul className={clickMenu ? `navbanner active` : `navbanner`}>
            <li>
              <Link className={pathname == "home" ? "active" : ""} to="/">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/check-poverty"
                className={pathname == "checkpoverty" ? "active" : ""}
              >
                Check Poverty
              </Link>
            </li>
            <li>
              <Link className={pathname == "about" ? "active" : ""} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className={pathname == "contact" ? "active" : ""}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <button onClick={navigateDonate}>
                Donate
                <i><BiDonateBlood/></i>
                </button>
            </li>
          </ul>
          <div className="navIcons">
            <i className="MenuIcon" onClick={ClickMenuIcons}>
              {clickMenu ? <GrClose /> : <CiMenuFries />}
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
