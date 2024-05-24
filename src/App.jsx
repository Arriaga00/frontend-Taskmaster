import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import PrivateRoute from "./router/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import { useContext, useEffect } from "react";
import Context from "./context/Context";

function App() {
  const { setUserPersistence } = useContext(Context);

  const PersistenceSession = () => {
    const storage = localStorage.getItem("UserData");
    if (storage) {
      const user = JSON.parse(storage);
      setUserPersistence(user);
    }
  };

  useEffect(() => {
    PersistenceSession();
  }, []);

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
