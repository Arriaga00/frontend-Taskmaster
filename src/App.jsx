import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import PrivateRoute from "./router/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./components/home/login/Login";
import CreateUser from "./components/home/formCreateUser/CreateUser";
import ResetPassword from "./components/resetPassword/ResetPassword";
import UpdatePassword from "./components/updatePassword/UpdatePassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/update-password/:id/:email/:names"
          element={<UpdatePassword />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
