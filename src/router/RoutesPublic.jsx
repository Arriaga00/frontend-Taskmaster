import { Route, Routes } from "react-router-dom";
import SectionHome from "../components/home/SectionHome";
import Login from "../pages/home/login/Login";
import CreateUser from "../pages/home/formCreateUser/CreateUser";

const RoutesPublic = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<SectionHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateUser />} />
        </Routes>
      </main>
    </>
  );
};

export default RoutesPublic;
