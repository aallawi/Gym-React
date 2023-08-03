import React from "react";
import homeImg from "../assets/home_img.jpg";
import "../style/Home.css";

export const Home = () => {
  return (
    <section id="home">
      <div className="home">
        <div className="home__content">
          <div className="content">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Exercise is the Key to a{" "}
              <span className="highlight">Healthy</span> Lifestyle
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              voluptatem assumenda numquam cumque ut eum corrupti delectus autem
              eos nostrum quo aperiam sed quaerat ad, placeat est distinctio
              voluptate laboriosam.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="home__buttons"
            >
              <div className="register">
                <a className="register" href="register">
                  Get Start
                </a>
              </div>
              <div className="register">
                <a className="register watch" href="register">
                  <span>
                    <i class="ri-play-circle-fill"></i>
                  </span>{" "}
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home__img">
          <img src={homeImg} alt="Fitness" />
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="box-1"
          >
            <span>
              <i class="ri-map-pin-2-fill"></i>
            </span>
            Find a new gym near you
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="box-2"
          >
            Heart Rate
            <span>
              <i class="ri-heart-pulse-fill"></i>
            </span>
            2567 BPM
          </div>
        </div>
      </div>
    </section>
  );
};
