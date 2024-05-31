import CreateFolder from "./CreateFolder";
import Folders from "./Folders";
import { motion } from "framer-motion";
const NavBarToDo = () => {
  const close = () => {
    window.localStorage.clear();
    window.location.href = "/home";
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="w-56 h-full border-r border-[#242424] flex flex-col items-center justify-between p-5 pb-1"
      >
        <div>
          <h2 className="border border-[#242424] h-10 text-md font-bold w-full  flex justify-center items-center  rounded-md text-[#9d7aea] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#9d7aea]">
            Carpetas...
          </h2>
          <CreateFolder />
          <Folders />
        </div>
        <motion.button
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
          onClick={close}
          className="w-full py-2 rounded-lg mb-1 hover:bg-red-500 hover:bg-opacity-20 border-red-500 ease-out duration-300 font-bold text-red-500 text-opacity-60 hover:text-red-500"
        >
          Cerrar sesión
        </motion.button>
      </motion.section>
    </>
  );
};

export default NavBarToDo;
