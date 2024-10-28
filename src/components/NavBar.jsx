import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/saalogo.png";
import logo1 from "../assets/saalogo2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const backgroundChange = () => {
    if (window.scrollY <= 60) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  window.addEventListener("scroll", backgroundChange);
  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className={navbar ? "navbar-bg" : "navbar-nav"}>
      <div className="logo-box">
        <Link to="home" className={!navbar ? "nav-logo-bg" : "nav-logo"}>
          <img
            src={navbar ? logo1 : logo}
            alt="SAA"
            width={navbar ? "100px" : "150px"}
            className="logo nav-logo"
          />
        </Link>
      </div>

      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="home" className="nav-link" onClick={closeMenu} y>
            <span className="nav-list">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            <span className="nav-list">About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="products" className="nav-link" onClick={closeMenu}>
            <span className="nav-list">Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            <span className="nav-list">Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            <span className="nav-list">Testimonial</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
