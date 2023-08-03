import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.jpg";
import "../style/Header.css";

export const Header = () => {
  const headerRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 30,
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header__logo">
        <div className="logo">
          <img src={logo} alt="Fitness logo" />
        </div>
        <h1>FITNESS</h1>
      </div>
      <div className="header__menu">
        <li>
          <a onClick={handleClick} href="#home">
            Home
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#test">
            Schedule
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#ready">
            Classes
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#pricing">
            Pricing
          </a>
        </li>
      </div>
      <div className="header__register register">
        <a className="register" href="register">
          Register
        </a>
        <div className="header__mobil__menu">
          <i class="ri-menu-fill"></i>
        </div>
      </div>
    </header>
  );
};
