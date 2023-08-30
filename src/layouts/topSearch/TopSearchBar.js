import React from "react";
import { Link } from "react-router-dom";

import Image from "../../components/image";
import addicon from "../../assets/account_icon.png";

function TopSearchBar({ setSearchValue, searchValue }) {
  return (
    <React.Fragment>
      <div className="top-search-box mb-20px">
        <div>
          <button className="back-top-btn mb-0">
            <Link to="/user-profile">
              <Image
                src={addicon}
                //   onClick={() => navigate("/user-profile")}
                style={{ maxWidth: "24px" }}
              />
            </Link>
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
    </React.Fragment>
  );
}

export default TopSearchBar;
