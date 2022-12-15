import React from "react";
import "./BigFamily.scss";
import LottieControl from "./Animation";
const BigFamily = () => {
  return (
    <div className="bigFamily">
      <div className="bigFamily__section">
        <div className="bigFamily__section-one">
          <LottieControl />
        </div>
        <div className="bigFamily__section-two">
          <div className="section-two__title wow bounceInDown" data-wow-delay="0.5s">

            <h2 >...!عضوی از خانواده بزرگ همراه اول شوید</h2>
          </div>
          <div className="section-two__items">
            <ul>
              <li className="section-two__item wow bounceInDown" data-wow-delay="0.9s">کسب تجربه در کنار بهترین‌ها</li>
              <li className="section-two__item wow bounceInDown" data-wow-delay="1.3s">
                ارائه گواهی معتبر در پایان دوره
              </li>
              <li className="section-two__item wow bounceInDown" data-wow-delay="1.5s">امکان استخدام پس از دوره</li>
              <li className="section-two__item wow bounceInDown" data-wow-delay="2s">به ‌صورت حضوری و تمام وقت</li>
              <li className="section-two__item wow bounceInDown" data-wow-delay="2.5s">
                دریافت حقوق و بیمه حین دوره کارآموزی
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigFamily;
