import React from "react";
import Card from "../Ui/Card";
import "./SecondPhotoSection.scss";
const SecondPhotoSection = () => {
  return (
    <div className="background">
      <div className="background__image">
        <Card className="background__container">
          <div className="background__text">
            <h1 className="background__title">نسل آینده طراحی تجربه کاربر </h1>
            <p className="background__passage">
              طراحی تجربهٔ کاربری روندی است به منظور افزایش رضایت کاربر از محصول
              که از طریق تحقیقات و طراحی حاصل می شود
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecondPhotoSection;
