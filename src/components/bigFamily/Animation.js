import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./animation.json";
export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div className=" wow bounceInDown" data-wow-delay="0.5s">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}
