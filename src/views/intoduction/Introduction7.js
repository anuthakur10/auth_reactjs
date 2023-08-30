import React from "react";
import sliderleftarrow from "../../assets/sliderleftarrow.svg";
import slidertopimg07 from "../../assets/slidertopimg07.png";
import bgbluerightarrow from "../../assets/bg-blue-right-arrow.svg";
import { useNavigate } from "react-router-dom";

const Introduction7 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-mobile-info">
        <div className="skip-intro-info">
          <div className="skip-intro-carousel">
            <div className="carousel-item-skip">
              <img
                src={slidertopimg07}
                alt="slidertopimg07"
                className="slide-img"
                width="100%"
              />
              <div className="pl-20px pr-20px">
                <h1>Easily Move Up with HomeWyse’s Simple Transfer Process</h1>
                <p>
                  You’re never locked in to HomeWyse - cash out your home’s
                  equity or get a traditional mortgage anytime you’d like. But
                  when you do find your next perfect home, we’re here. Transfer
                  homes in the simplest and most affordable way possible. Just
                  give us 30 days notice and begin the transfer process right
                  from the app - then move in! It’s as simple as that. Welcome
                  to HomeWyse.
                </p>
              </div>
            </div>
            <div className="carousel-indicators-info">
              <button
                onClick={() => navigate("/introduction6")}
                className="carousel-control-prev"
              >
                <img src={sliderleftarrow} alt="img" />
              </button>
              {/* <div className="carousel-indicators">
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button className="active"></button>
                            <button></button>
                        </div> */}
              <button
                onClick={() => navigate("/login")}
                className="carousel-control-next pre-app-btn"
              >
                <span className="pre-btn-txt">Get Pre-approved</span>{" "}
                <img src={bgbluerightarrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction7;
