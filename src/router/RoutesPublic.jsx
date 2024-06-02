import { Route, Routes } from "react-router-dom";
import SectionHome from "../components/home/SectionHome";
import Login from "../components/home/login/Login";
import CreateUser from "../components/home/formCreateUser/CreateUser";

const RoutesPublic = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/home" element={<SectionHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateUser />} />
        </Routes>
      </main>
    </>
  );
};

export default RoutesPublic;
