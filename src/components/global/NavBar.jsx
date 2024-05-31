import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
  return (
    <>
      <motion.nav
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full flex justify-between items-center px-3 py-5 "
      >
        <NavLink
          to={"/home"}
          className="font-bold text-3xl cursor-pointer titulo hover:scale-110 transition-all duration-300 flex items-center gap-2"
        >
          Task Master
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-violet-500 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
            />
          </svg>
        </NavLink>
        <div className="flex items-center  justify-between w-48">
          <NavLink
            to={"login"}
            className=" border-none text-[#707070] border-[#242424] px-3 py-1 hover:text-green-500 ease-out duration-300 font-bold"
          >
            Inicia sesión
          </NavLink>
          <NavLink
            to={"signup"}
            className="border rounded-md border-[#242424]  bg-[#242424] text-white px-3 py-1 font-bold hover:bg-[#000000] hover:text-yellow-500 ease-out duration-500"
          >
            Únete
          </NavLink>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
