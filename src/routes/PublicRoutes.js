import { Routes, Route } from "react-router-dom";
import HomeWysevsmortgage from "../views/welcome/dashboard/HomeWysevsmortgage";
import Introduction1 from "../views/intoduction/Introduction1";
import Introduction2 from "../views/intoduction/Introduction2";
import Introduction3 from "../views/intoduction/Introduction3";
import Introduction4 from "../views/intoduction/Introduction4";
import Introduction5 from "../views/intoduction/Introduction5";
import Introduction6 from "../views/intoduction/Introduction6";
import Introduction7 from "../views/intoduction/Introduction7";
import Getmypreapprove from "../views/welcome/Getmypreapprove";
import Getpreapprove from "../views/welcome/Getpreapprove";
import Welcome from "../views/welcome/Welcome";
import SignUp from "../views/signup/SignUp";
import Login from "../views/login/Login";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/homeWyse-vs-mortgage" element={<HomeWysevsmortgage />} />
      <Route path="/get-mypreapprove" element={<Getmypreapprove />} />
      <Route path="/get-preapproved" element={<Getpreapprove />} />
      <Route path="/introduction1" element={<Introduction1 />} />
      <Route path="/introduction2" element={<Introduction2 />} />
      <Route path="/introduction3" element={<Introduction3 />} />
      <Route path="/introduction4" element={<Introduction4 />} />
      <Route path="/introduction5" element={<Introduction5 />} />
      <Route path="/introduction6" element={<Introduction6 />} />
      <Route path="/introduction7" element={<Introduction7 />} />
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default PublicRoutes;
