import CreateFolder from "./CreateFolder";
import Folders from "./Folders";

const NavBarToDo = () => {
  return (
    <>
      <section className="w-56 h-full border-r border-[#242424] flex flex-col items-center justify-start p-5">
        <h2 className="border border-[#242424] h-10 text-md font-bold w-full  flex justify-center items-center  rounded-md text-[#9d7aea] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#9d7aea]">
          Carpetas...
        </h2>
        <CreateFolder />
        <Folders />
      </section>
    </>
  );
};

export default NavBarToDo;
