import React from "react";
import logopic from "../../assets/logopic.svg";
import homeWyselogo from "../../assets/HomeWyselogo.svg";

const SplashScreen = () => {
  return (
    <>
      <div className="splashscreen-page-info">
        <div className="homewyse-logo-info">
          <div className="mb-20px">
            <img src={logopic} />
          </div>
          <div>
            <img src={homeWyselogo} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SplashScreen;
