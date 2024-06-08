import Footer from "../../components/global/Footer";
import MainToDo from "../../components/dashboard/main/MainToDo";
import NavBarToDo from "../../components/dashboard/main/nav/NavBarToDo";
// import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <>
      <main
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.6 }}
        className="w-full  mx-auto max-w-screen-3xl   h-[48rem]   mb-8 rounded-md border border-[#242424] flex backdrop-blur-md my-20"
      >
        <NavBarToDo />
        <MainToDo />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
