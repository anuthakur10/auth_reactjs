import SplashScreen from "./views/splash/SplashScreen";
import { ToastContainer } from "react-toastify";
import AuthWrapper from "./auth/AuthContext";
import { useEffect, useState } from "react";
import Routers from "./routes/Routers";

// /css
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <ToastContainer />
      <AuthWrapper>
        <Routers />
      </AuthWrapper>
      <ToastContainer />
    </>
  );
}

export default App;

const Init = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? <SplashScreen /> : <App />;
};

export { Init };
