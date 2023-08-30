import React from "react";
import Navigation from "../layouts/navigation/Navigation";

function BottomNavigation({ children }) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}

export default BottomNavigation;
