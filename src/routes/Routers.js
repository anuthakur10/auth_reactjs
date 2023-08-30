import React from "react";
import { Routes, Route } from "react-router-dom";

// custom import

import HomeWysevsmortgage from "../views/welcome/dashboard/HomeWysevsmortgage";
import Introduction1 from "../views/intoduction/Introduction1";
import Introduction2 from "../views/intoduction/Introduction2";
import Introduction3 from "../views/intoduction/Introduction3";
import Introduction4 from "../views/intoduction/Introduction4";
import Introduction5 from "../views/intoduction/Introduction5";
import Introduction6 from "../views/intoduction/Introduction6";
import Introduction7 from "../views/intoduction/Introduction7";
import Getmypreapprove from "../views/welcome/Getmypreapprove";
import Userprofile from "../views/welcome/explore/Userprofile";
import Editaccount from "../views/welcome/explore/Editaccount";
import Dashboard from "../views/welcome/dashboard/Dashboard";
import ProtectedRoutes from "../views/auth/ProtectedRoutes";
import Getpreapprove from "../views/welcome/Getpreapprove";
import Explore from "../views/welcome/explore/Explore";
import Welcome from "../views/welcome/Welcome";
import Chat from "../views/welcome/chat/Chat";
import SignUp from "../views/signup/SignUp";
import Login from "../views/login/Login";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/introduction1" element={<Introduction1 />} />
        <Route path="/homeWyse-vs-mortgage" element={<HomeWysevsmortgage />} />
        <Route path="/introduction2" element={<Introduction2 />} />
        <Route path="/introduction3" element={<Introduction3 />} />
        <Route path="/introduction4" element={<Introduction4 />} />
        <Route path="/introduction5" element={<Introduction5 />} />
        <Route path="/introduction6" element={<Introduction6 />} />
        <Route path="/introduction7" element={<Introduction7 />} />
        <Route path="/get-preapproved" element={<Getpreapprove />} />
        <Route path="/get-mypreapprove" element={<Getmypreapprove />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoutes>
              <Explore />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoutes>
              <Userprofile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/edit-account"
          element={
            <ProtectedRoutes>
              <Editaccount />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoutes>
              <Chat />{" "}
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};
export default Routers;
