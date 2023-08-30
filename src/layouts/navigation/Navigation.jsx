import React from "react";
import { Link } from "react-router-dom";
// custom import
import exploreactiveicon from "../../assets/exploreactiveicon.svg";
import analyicsicon from "../../assets/analyicsicon.svg";
import dashbgblock from "../../assets/dashbgblock.svg";
import commenticon from "../../assets/commenticon.svg";

const Navigation = () => {
  return (
    <>
      <div className="dashboard-botm-info">
        <img className="bg-img-dash" src={dashbgblock} />
        <div className="dashboard-bt-menu">
          <div className="top-icon-box active">
            <Link to="/explore">
              <img src={exploreactiveicon} />
              <h4>Explore</h4>
            </Link>
          </div>

          <div className="top-icon-box dash-box-info">
            <Link to="/dashboard">
              <div className="dash-icon-img">
                <img src={analyicsicon} />
              </div>
            </Link>

            <h4>Dashboard</h4>
          </div>

          <div className="top-icon-box">
            <img src={commenticon} />
            <h4>Chat</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
