import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

// import style component
import "../style/Testimonials.css";

import sto1 from "../assets/stro 1.jpg";
import sto2 from "../assets/stro 2.jpg";
import sto3 from "../assets/stro 3.jpg";
import sto4 from "../assets/stro 4.jpg";
import sto5 from "../assets/stro 5.jpg";

export const Testimonials = () => {
  return (
    <section id="test" className="test">
      <h2 className="test_title">Testimonials</h2>
      <div className="test_swiper">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide_item">
              <div className="slide_img">
                <img src={sto1} alt="slide 1" />
              </div>
              <div className="slide_text">
                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias dignissimos facilis possimus labore non eos
                  suscipit, veritatis, eaque, nesciunt cum neque vitae culpa
                  reiciendis in. Quis est explicabo earum sit!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide_item">
              <div className="slide_img">
                <img src={sto2} alt="slide 1" />
              </div>
              <div className="slide_text">
                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias dignissimos facilis possimus labore non eos
                  suscipit, veritatis, eaque, nesciunt cum neque vitae culpa
                  reiciendis in. Quis est explicabo earum sit!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide_item">
              <div className="slide_img">
                <img src={sto3} alt="slide 1" />
              </div>
              <div className="slide_text">
                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias dignissimos facilis possimus labore non eos
                  suscipit, veritatis, eaque, nesciunt cum neque vitae culpa
                  reiciendis in. Quis est explicabo earum sit!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide_item">
              <div className="slide_img">
                <img src={sto4} alt="slide 1" />
              </div>
              <div className="slide_text">
                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias dignissimos facilis possimus labore non eos
                  suscipit, veritatis, eaque, nesciunt cum neque vitae culpa
                  reiciendis in. Quis est explicabo earum sit!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide_item">
              <div className="slide_img">
                <img src={sto5} alt="slide 1" />
              </div>
              <div className="slide_text">
                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias dignissimos facilis possimus labore non eos
                  suscipit, veritatis, eaque, nesciunt cum neque vitae culpa
                  reiciendis in. Quis est explicabo earum sit!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
