import CardUser from "../../components/dashboard/user/CardUser";
import MainToDo from "./main/MainToDo";
import Footer from "../../components/global/Footer";
import NavBarToDo from "./main/NavBarToDo";

const Dashboard = () => {
  return (
    <>
      <header className="w-full flex justify-end items-center px-5 py-5">
        <CardUser />
      </header>
      <main className="w-full  mx-auto max-w-screen-3xl   h-[48rem]   mb-8 rounded-md border border-[#242424] flex">
        <NavBarToDo />
        <MainToDo />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
