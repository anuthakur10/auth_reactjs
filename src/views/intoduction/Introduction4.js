import React from "react";
import sliderleftarrow from "../../assets/sliderleftarrow.svg";
import slidertopimg04 from "../../assets/slidertopimg04.png";
import bgbluerightarrow from "../../assets/bg-blue-right-arrow.svg";
import { useNavigate } from "react-router-dom";

const Introduction4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-mobile-info">
        <div className="skip-intro-info">
          <div className="skip-intro-carousel">
            <div className="carousel-item-skip">
              <img
                src={slidertopimg04}
                alt="slidertopimg04"
                className="slide-img"
                width="100%"
              />
              <div className="pl-20px pr-20px">
                <h1>Get a Fast Approval and Close just as Quickly!</h1>
                <p>
                  Fill out your home application, and get your official approval
                  amount in as little as 1 day. Pick your perfect home, set your
                  offer amount, and become a homeowner quickly - all from the
                  comfort of your home.
                </p>
                <p>
                  Love your current home but want a lower monthly payment?
                  Great, fill out our application - HomeWyse can help with that
                  too!
                </p>
              </div>
            </div>
            <div className="carousel-indicators-info">
              <button
                onClick={() => navigate("/introduction3")}
                className="carousel-control-prev"
              >
                <img src={sliderleftarrow} />
              </button>
              <div className="carousel-indicators">
                <button></button>
                <button></button>
                <button></button>
                <button className="active"></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
              <button
                onClick={() => navigate("/introduction5")}
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

export default Introduction4;
