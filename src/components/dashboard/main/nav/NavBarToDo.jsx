import CreateFolder from "./CreateFolder";
import Folders from "./Folders";

const NavBarToDo = () => {
  const close = () => {
    window.localStorage.removeItem("userPersistence");
    window.location.href = "/home";
  };

  return (
    <>
      <section className="w-56 h-full border-r border-[#242424] flex flex-col items-center justify-between p-5 pb-1">
        <div>
          <h2 className="border border-[#242424] h-10 text-md font-bold w-full  flex justify-center items-center  rounded-md text-[#9d7aea] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#9d7aea]">
            Carpetas...
          </h2>
          <CreateFolder />
          <Folders />
        </div>
        <button
          onClick={close}
          className="w-full py-2 rounded-full hover:bg-red-500 hover:bg-opacity-20 border-red-500 ease-out duration-300 font-bold text-red-500 text-opacity-60 hover:text-red-500"
        >
          Cerrar sesión
        </button>
      </section>
    </>
  );
};

export default NavBarToDo;
