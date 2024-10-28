import { useState } from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BacktoTop from "./components/BacktoTop";
function App() {
  return (
    <>
      <Navbar />
      <BacktoTop />
      <Home />
      <Products />
      <About />
    </>
  );
}

export default App;
