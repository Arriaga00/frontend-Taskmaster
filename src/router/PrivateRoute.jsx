import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = window.localStorage.getItem("loguinUser");
  if (!user) return <Navigate to="/home/login" />;
  return <Outlet />;
};

export default PrivateRoute;
