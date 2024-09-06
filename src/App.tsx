import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { useEffect } from "react";

const App = () => {
  return (
    <>
      <Navbar />
      <PrivateRoute>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Main />} />
          <Route path="*" element={<NavigateToLogin />} />
        </Routes>
      </PrivateRoute>
    </>
  );
};

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem("login");
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);
  return <>{children}</>;
};

const NavigateToLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, [navigate]);
  return <></>;
};

export default App;
