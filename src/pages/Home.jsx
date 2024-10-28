import React from "react";
import "./Home.css";
import { Element } from "react-scroll";
import bg from "../assets/bg.gif";

export default function Home() {
  return (
    <Element className="home-container" name="home">
      <div class="home_detail">
        <div className="home-neem">
          <h1>N</h1>
          <h1>e</h1>
          <h1>e</h1>
          <h1>m</h1>
        </div>
        <div className="home-content">
          <h2>Natural Products</h2>
        </div>
        <div className="contact-us">
          <button>CONTACT US</button>
        </div>
      </div>
    </Element>
  );
}
