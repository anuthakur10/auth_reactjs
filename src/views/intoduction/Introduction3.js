import React from "react";
import sliderleftarrow from "../../assets/sliderleftarrow.svg";
import slidertopimg03 from "../../assets/slidertopimg03.png";
import bgbluerightarrow from "../../assets/bg-blue-right-arrow.svg";
import { useNavigate } from "react-router-dom";

const Introduction3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-mobile-info">
        <div className="skip-intro-info">
          <div className="skip-intro-carousel">
            <div className="carousel-item-skip">
              <img
                src={slidertopimg03}
                alt="slidertopimg03"
                className="slide-img"
                width="100%"
              />
              <div className="pl-20px pr-20px">
                <h1>Now the Fun Part -Finding Your Dream Home</h1>
                <p>
                  Trying to afford your dream home? HomeWyse has you covered.
                  Want HomeWyse to purchase your current home? We do that too!
                  Soon you you’ll be able to browse properties directly on our
                  app. For now, use your preferred home search app and just fill
                  out an application with the address and we'll see if it's a
                  good fit. Owning your next perfect home has never been easier
                  or more affordable.
                </p>
              </div>
            </div>
            <div className="carousel-indicators-info">
              <button
                onClick={() => navigate("/introduction2")}
                className="carousel-control-prev"
              >
                <img src={sliderleftarrow} />
              </button>
              <div className="carousel-indicators">
                <button></button>
                <button></button>
                <button className="active"></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
              <button
                onClick={() => navigate("/introduction4")}
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

export default Introduction3;
