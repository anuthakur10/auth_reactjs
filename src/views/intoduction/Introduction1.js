import React from "react";
// import sliderleftarrow from "../../assets/sliderleftarrow.svg";
import slidertopimg01 from "../../assets/slidertopimg01.png";
import bgbluerightarrow from "../../assets/bg-blue-right-arrow.svg";
import { useNavigate } from "react-router-dom";

const Introduction1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-mobile-info">
        <div className="skip-intro-info">
          <div className="skip-intro-carousel">
            <div className="carousel-item-skip">
              <img
                src={slidertopimg01}
                alt="slidertopimg01"
                className="slide-img"
                width="100%"
              />
              <div className="pl-20px pr-20px">
                <h1>How HomeWyse Equity Sharing Works</h1>
                <p>
                  Want to buy a home without the hassle of a traditional
                  mortgage? HomeWyse is here to help! Our equity sharing service
                  offers lower monthly payments and helps you build more equity
                  in your home. Plus, we take on a portion of the ownership,
                  giving you more flexibility and ease in the process. Don't let
                  mortgage debt hold you back - choose HomeWyse for a smarter,
                  simpler home buying experience.
                </p>
              </div>
            </div>
            <div className="carousel-indicators-info">
              <button
                className="btn-skipin"
                onClick={() => navigate("/introduction7")}
              >
                Skip Intro
              </button>
              {/* <button className="carousel-control-prev">
                            <img src={sliderleftarrow} />
                        </button> */}
              <div className="carousel-indicators">
                <button className="active"></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
              <button
                onClick={() => navigate("/introduction2")}
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

export default Introduction1;
