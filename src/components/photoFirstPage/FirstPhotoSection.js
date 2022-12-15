import React ,{useState,useEffect} from 'react';
import "./FirstPhotoSection.scss";
import loader from "../../assets/images/Spinner-2.gif";

const FirstPhotoSection = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
  return (
      <>
          {loading &&
              <div className="loader_bg">
                  <div className="loader"><img src={loader} alt=""/>
                  </div>
              </div>
          }
    <div className="bg">
      <div className="bg__image">
        <div className="bg__heading">
          {" "}
          <h1 className=" wow fadeInDown" data-wow-delay="3s">دوره کارآموزی همراه اول </h1>
        </div>
      </div>
    </div>
          </>
  );
};

export default FirstPhotoSection;
