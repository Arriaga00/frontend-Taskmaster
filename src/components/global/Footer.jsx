import { LinkOutlined } from "@ant-design/icons";
// import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <footer className="w-full flex justify-center items-center ">
        <a
          // transition={{ duration: 0.5 }}
          // animate={{ opacity: 1 }}
          // initial={{ opacity: 0 }}
          // exit={{ opacity: 0 }}
          href="#"
          className="font-bold text-[#707070] border-[#242424] px-3 py-1 hover:text-blue-500 ease-out duration-300 "
        >
          @ArriagaDev <LinkOutlined />
        </a>
      </footer>
    </>
  );
};

export default Footer;
