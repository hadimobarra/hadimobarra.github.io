import React from "react";
import "./BigFamily.scss";
import Card from "../Ui/Card";
import LottieControl from "./Animation"
const BigFamily = () => {
  return (
    <Card className="bigFamily__container">
      <div className="bigFamily__section">
        <div className="bigFamily__section-one">
          <LottieControl/>
        </div>
        <div className="bigFamily__section-two">
          <div className="section-two__title">
            <h2>...!عضوی از خانواده بزرگ همراه اول شوید</h2>
          </div>
          <div className="section-two__items">
            <div className="section-two__item">
              <p> کسب تجربه در کنار بهترین‌ها</p>
            </div>
            <div className="section-two__item">
      
              <p>ارائه گواهی معتبر در پایان دوره</p>
            </div>
            <div className="section-two__item">
     
              <p>امکان استخدام پس از دوره</p>
            </div>
            <div className="section-two__item">
          
              <p>به ‌صورت حضوری و تمام وقت</p>
            </div>
            <div className="section-two__item">
       
              <p>دریافت حقوق و بیمه حین دوره کارآموزی</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BigFamily;
