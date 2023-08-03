import React from "react";
import logoF from "../assets/logoF.jpeg";
import "../style/Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer_boxs">
        <div className="footer_box logo">
          <div className="header__logo">
            <div className="logo">
              <img src={logoF} alt="Fitness logo" />
              <h1>FITNESS</h1>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer_box">
          <h4>Company</h4>
          <li>Our Program</li>
          <li>Our plan</li>
          <li>Become a member</li>
        </div>
        <div className="footer_box">
          <h4>Quick Links</h4>
          <li>About us</li>
          <li>Support</li>
        </div>
        <div className="footer_box">
          <h4>Quick Links</h4>
          <li>About us</li>
          <li>Support</li>
        </div>
      </div>
      <div className="footer_end">
        Copyright - {year} Developed by <span>Ahmed Allawi</span> - All right
        reserved.{" "}
      </div>
    </div>
  );
};
