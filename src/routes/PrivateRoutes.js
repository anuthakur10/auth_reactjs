import { Routes, Route } from "react-router-dom";
// custom import
import Userprofile from "../views/welcome/explore/Userprofile";
import Editaccount from "../views/welcome/explore/Editaccount";
import Dashboard from "../views/welcome/dashboard/Dashboard";
import ProtectedRoutes from "../views/auth/ProtectedRoutes";
import Explore from "../views/welcome/explore/Explore";
import Chat from "../views/welcome/chat/Chat";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/user-profile" element={<Userprofile />} />
      <Route path="/edit-account" element={<Editaccount />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/explore" element={<Explore />} />

      <Route path="/chat" element={<Chat />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default PrivateRoutes;
