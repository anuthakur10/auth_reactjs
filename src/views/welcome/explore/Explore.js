/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import searchicon from "../../../assets/searchicon.svg";
import addicon from "../../../assets/account_icon.png";
import exploreactiveicon from "../../../assets/exploreactiveicon.svg";
import analyicsicon from "../../../assets/analyicsicon.svg";
import commenticon from "../../../assets/commenticon.svg";
import dashbgblock from "../../../assets/dashbgblock.svg";
// import home1 from "../../../assets/home1.png";
import baths from "../../../assets/bathroom_small_icon.png";
import bed from "../../../assets/bedroom_small_icon.png";
import sqfoot from "../../../assets/area_small_icon.png";
// import { BASE_URL } from "../../../API";
import { connect } from "react-redux";
import { getHomesData } from "../../../redux/actions/home";
import { AxiosToken } from "../../../services/axiosClient";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Explore = ({ homes, getHomes, pageNo, pageSize }) => {
  console.log(homes, pageNo, pageSize, "homes");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }

  useEffect(() => {
    const tokenSurce = AxiosToken();
    console.log(tokenSurce.token);
    const user = JSON.parse(localStorage.getItem("user"));

    const payload = {
      token: user.token,
      cancelToken: tokenSurce.token,
      pageNo,
      pageSize,
    };

    getHomes({ ...payload });

    return () => {
      tokenSurce.cancel();
    };
  }, []);

  return (
    <>
      <div className="body-mobile-info explore-page-info">
        <div className="dashboard-info">
          <div className="top-search-box mb-20px">
            <div>
              <button className="back-top-btn mb-0">
                <LazyLoadImage
                  src={addicon}
                  onClick={() => navigate("/user-profile")}
                  style={{ maxWidth: "24px" }}
                />
              </button>
            </div>
            <div className="search-field-info">
              <div className="form-group">
                <input
                  type="text"
                  className="search-field"
                  placeholder="Search for homes"
                />
                {/* <img className="search-icon-in" src={searchicon} /> */}
              </div>
            </div>
          </div>

          {/* card start */}

          <div className="text-align-center mb-30px">
            {homes?.map((item, index) => {
              return (
                <div
                  className="text-align-center"
                  style={{ width: "375px", height: "324px" }}
                  key={index}
                >
                  {item.images.map((image, idx) => (
                    <LazyLoadImage
                      src={image.image}
                      width="335px"
                      height="212px"
                      style={{
                        backgroundColor: "#E8ECF4",
                        borderRadius: "16px",
                      }}
                      key={idx}
                    />
                  ))}
                  <div style={{ display: "flex", position: "relative" }}>
                    <div style={{ width: "231px", height: "28px" }}>
                      <h5
                        style={{
                          fontFamily: "Urbanist",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "20px",
                          lineHeight: "28px",
                          color: "#04050B,",
                          position: "absolute",
                          left: "20px",
                        }}
                      >
                        ${item.emi} / month
                      </h5>
                    </div>
                    <div
                      style={{
                        width: "104px",
                        height: "28px",
                        textAlign: "right",
                      }}
                    >
                      <h5
                        style={{
                          fontFamily: "Urbanist",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "20px",
                          lineHeight: "28px",
                          color: "#04050B",
                          position: "absolute",
                          left: "251px",
                        }}
                      >
                        ${item.fullAmount}
                      </h5>
                    </div>
                  </div>

                  <div style={{ position: "relative" }}>
                    <LazyLoadImage
                      src={bed}
                      style={{
                        width: "16px",
                        height: "16px",
                        position: "absolute",
                        left: "20px",
                      }}
                    />
                    <h6
                      style={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#8B98B9",
                        position: "absolute",
                        left: "44px",
                      }}
                    >
                      {item.beds} Beds
                    </h6>

                    <LazyLoadImage
                      src={baths}
                      style={{
                        width: "16px",
                        height: "16px",
                        position: "absolute",
                        left: "105px",
                      }}
                    />
                    <h6
                      style={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#8B98B9",
                        position: "absolute",
                        left: "129px",
                      }}
                    >
                      {item.baths} Baths
                    </h6>

                    <LazyLoadImage
                      src={sqfoot}
                      style={{
                        width: "16px",
                        height: "16px",
                        position: "absolute",
                        left: "195px",
                      }}
                    />
                    <h6
                      style={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#8B98B9",
                        position: "absolute",
                        left: "219px",
                      }}
                    >
                      {item.area} sqft
                    </h6>
                  </div>

                  <div style={{ position: "relative" }}>
                    <h5
                      style={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#8B98B9",
                        position: "absolute",
                        width: "231px",
                        height: "24px",
                        left: "8px",
                        top: "20px",
                      }}
                    >
                      {item.address}
                    </h5>
                  </div>

                  <div style={{ position: "relative" }}>
                    <h5
                      style={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#797979",
                        position: "absolute",
                        width: "231px",
                        height: "24px",
                        left: "-10px",
                        top: "40px",
                      }}
                    >
                      {item.aboutMortgage}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>

          {/* card end */}
        </div>
        <div className="dashboard-botm-info">
          <img className="bg-img-dash" src={dashbgblock} />
          <div className="dashboard-bt-menu">
            <div className="top-icon-box active">
              <img src={exploreactiveicon} />
              <h4>Explore</h4>
            </div>
            <div className="top-icon-box dash-box-info" onClick={handleClick}>
              <div className="dash-icon-img">
                <img src={analyicsicon} />
              </div>
              <h4>Dashboard</h4>
            </div>
            <div className="top-icon-box">
              <img src={commenticon} />
              <h4>Chat</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    homes: state.home.items,
    pageNo: state.home.pageNo,
    pageSize: state.home.pageSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHomes: (payload) => dispatch(getHomesData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
