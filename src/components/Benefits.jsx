import React from "react";
import "../style/Benefits.css";
import p1 from "../assets/p-one.png";
import p2 from "../assets/p-two.png";
import p3 from "../assets/p-three.png";

export const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="benefits_title">
        <h2>
          Benefits Of <span>Exercise</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt
          tempore inventore culpa soluta nihil facere.
        </p>
      </div>
      <div className="benefits_boxs">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="benefits_box"
        >
          <div className="box_img">
            <img src={p1} alt="strong" />
          </div>
          <div className="box_text">
            <h4>Healthy Life</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="benefits_box"
        >
          <div className="box_img">
            <img src={p2} alt="strong" />
          </div>
          <div className="box_text">
            <h4>Healthy Life</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="benefits_box"
        >
          <div className="box_img">
            <img src={p3} alt="strong" />
          </div>
          <div className="box_text">
            <h4>Healthy Life</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
