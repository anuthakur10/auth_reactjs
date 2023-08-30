import React from "react";
import sliderleftarrow from "../../assets/sliderleftarrow.svg";
import slidertopimg06 from "../../assets/slidertopimg06.png";
import bgbluerightarrow from "../../assets/bg-blue-right-arrow.svg";
import { useNavigate } from "react-router-dom";

const Introduction6 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-mobile-info">
        <div className="skip-intro-info">
          <div className="skip-intro-carousel">
            <div className="carousel-item-skip">
              <img
                src={slidertopimg06}
                alt="slidertopimg06"
                className="slide-img"
                width="100%"
              />
              <div className="pl-20px pr-20px">
                <h1>Track Progress, Manage Equity and Build for Your Future</h1>
                <p>
                  The HomeWyse dashboard is your one-stop-shop for managing your
                  home finances. After purchasing a home with HomeWyse, you can
                  use your dashboard to track your monthly payments, monitor the
                  value of your home equity, keep updated on your homes
                  estimated appreciation and manage your cash savings. Think of
                  your dashboard as your new center of financial gravity.
                </p>
              </div>
            </div>
            <div className="carousel-indicators-info">
              <button
                onClick={() => navigate("/introduction5")}
                className="carousel-control-prev"
              >
                <img src={sliderleftarrow} />
              </button>
              <div className="carousel-indicators">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button className="active"></button>
                <button></button>
              </div>
              <button
                onClick={() => navigate("/introduction7")}
                className="carousel-control-next"
              >
                <img src={bgbluerightarrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction6;
