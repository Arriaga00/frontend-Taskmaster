import CreateFolder from "./CreateFolder";
import Folders from "./Folders";

const NavBarToDo = () => {
  return (
    <>
      <section className="w-56 h-full border-r border-[#242424] flex flex-col items-center justify-start p-5">
        <h2 className="border border-[#242424] h-10 text-md font-bold w-full  flex justify-center items-center  rounded-md text-yellow-500">
          Carpetas...
        </h2>
        <CreateFolder />
        <Folders />
      </section>
    </>
  );
};

export default NavBarToDo;
