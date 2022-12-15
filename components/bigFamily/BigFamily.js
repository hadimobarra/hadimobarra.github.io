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
          <div className="section-two__title">
            <h2>...!عضوی از خانواده بزرگ همراه اول شوید</h2>
          </div>
          <div className="section-two__items">
            <ul>
              <li className="section-two__item">کسب تجربه در کنار بهترین‌ها</li>
              <li className="section-two__item">
                ارائه گواهی معتبر در پایان دوره
              </li>
              <li className="section-two__item">امکان استخدام پس از دوره</li>
              <li className="section-two__item">به ‌صورت حضوری و تمام وقت</li>
              <li className="section-two__item">
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
