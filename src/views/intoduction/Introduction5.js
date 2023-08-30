import React from "react";
import sliderleftarrow from "../../assets/sliderleftarrow.svg";
import slidertopimg05 from "../../assets/slidertopimg05.png";
import bgbluerightarrow from "../../assets/bg-blue-right-arrow.svg";
import { useNavigate } from "react-router-dom";

const Introduction5 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-mobile-info">
        <div className="skip-intro-info">
          <div className="skip-intro-carousel">
            <div className="carousel-item-skip">
              <img
                src={slidertopimg05}
                alt="slidertopimg05"
                className="slide-img"
                width="100%"
              />
              <div className="pl-20px pr-20px">
                <h1>Get Monthly Savings by Owning Through HomeWyse</h1>
                <p>
                  HomeWyse is able to lower your monthly payment by up to 37%
                  while, on average building you equal or more wealth than an
                  equivalent mortgage. For the median home in America, that is
                  over $600 a month in savings! And the best part is you have
                  complete control of that savings - save it, use it, or grow a
                  nest egg by investing it!
                </p>
              </div>
            </div>
            <div className="carousel-indicators-info">
              <button
                onClick={() => navigate("/introduction4")}
                className="carousel-control-prev"
              >
                <img src={sliderleftarrow} />
              </button>
              <div className="carousel-indicators">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button className="active"></button>
                <button></button>
                <button></button>
              </div>
              <button
                onClick={() => navigate("/introduction6")}
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

export default Introduction5;
