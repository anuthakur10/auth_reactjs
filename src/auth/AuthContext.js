import React from "react";

export const AuthContext = React.createContext();

const AuthWrapper = ({ children }) => {
  const [auth, setAuth] = React.useState(null);
  return (
    <React.Fragment>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  );
};
export default AuthWrapper;
