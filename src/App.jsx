import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import PrivateRoute from "./router/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
