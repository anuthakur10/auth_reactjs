import React from "react";
import sliderleftarrow from "../../assets/sliderleftarrow.svg";
import slidertopimg02 from "../../assets/slidertopimg02.png";
import bgbluerightarrow from "../../assets/bg-blue-right-arrow.svg";
import { useNavigate } from "react-router-dom";

const Introduction2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-mobile-info">
        <div className="skip-intro-info">
          <div className="skip-intro-carousel">
            <div className="carousel-item-skip">
              <img
                src={slidertopimg02}
                alt="slidertopimg02"
                className="slide-img"
                width="100%"
              />
              <div className="pl-20px pr-20px">
                <h1>How is this Similar to Traditional Home Ownership?</h1>
                <p>
                  As a HomeWyse homeowner, you’re responsible for maintaining
                  your home just like with a mortgage. This includes keeping up
                  with repairs and any improvements that may increase the value
                  of your home. When you move, your home’s value will be
                  reassessed to determine the equity that you've built. So, take
                  pride in your home and keep it in good condition to maximize
                  your investment.
                </p>
              </div>
            </div>
            <div className="carousel-indicators-info">
              <button
                onClick={() => navigate("/")}
                className="carousel-control-prev"
              >
                <img src={sliderleftarrow} />
              </button>
              <div className="carousel-indicators">
                <button></button>
                <button className="active"></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
              <button
                onClick={() => navigate("/introduction3")}
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

export default Introduction2;
