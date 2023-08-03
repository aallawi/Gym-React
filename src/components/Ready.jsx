import React from "react";
import "../style/Ready.css";
import start from "../assets/start.jpg";

export const Ready = () => {
  return (
    <section id="ready" className="ready">
      <div data-aos="fade-left" data-aos-duration="1000" className="ready_img">
        <img src={start} alt="" />
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="ready_text"
      >
        <h2>
          Ready to make a <span>change?</span>{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in
          recusandae voluptatum voluptates quod ullam sed modi est quo amet.
        </p>
        <div className="header__register register">
          <a className="register" href="register">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};
