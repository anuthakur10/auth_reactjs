import { Navigate } from "react-router-dom";
import React from "react";
import { AuthContext } from "../../auth/AuthContext";

function ProtectedRoutes({ children }) {
  const { auth } = React.useContext(AuthContext);
  return auth ? children : <Navigate to='/login' />;
}

export default ProtectedRoutes;
