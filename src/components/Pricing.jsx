import React from "react";
import "../style/Pricing.css";

export const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="benefits_title">
        <h2>
          Gym <span>Pricing</span> Plan
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt
          tempore inventore culpa soluta nihil facere.
        </p>
      </div>
      <div className="pricing_boxs">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pricing_box"
        >
          <div className="pricing_title">
            <h2>Regular Member</h2>
            <h4>
              $50 <span>/Month</span>
            </h4>
          </div>
          <div className="pricing_content">
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              <span>Unlimted access to the gym</span>
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              Customer Support
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              Personal trainer
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              5 Classes per week
            </li>
            <div className="register">
              <a className="register" href="register">
                Join Now
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="pricing_box pricing_top"
        >
          <div className="pricing_title">
            <h2>Premium Member</h2>
            <h4>
              $70 <span>/Month</span>
            </h4>
          </div>
          <div className="pricing_content">
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              <span>Unlimted access to the gym</span>
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              Customer Support
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              Personal trainer
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              5 Classes per week
            </li>
            <div className="register">
              <a className="register" href="register">
                Join Now
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pricing_box"
        >
          <div className="pricing_title">
            <h2>Standard Member</h2>
            <h4>
              $100 <span>/Month</span>
            </h4>
          </div>
          <div className="pricing_content">
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              <span>Unlimted access to the gym</span>
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              Customer Support
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              Personal trainer
            </li>
            <li>
              <span>
                <i class="ri-hexagon-fill"></i>
              </span>
              5 Classes per week
            </li>
            <div className="register">
              <a className="register" href="register">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
