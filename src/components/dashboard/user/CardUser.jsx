import { useState } from "react";
import { useContext } from "react";
import { SvgIconDelete, SvgIconEdit } from "../../../components/global/svg";
import Context from "../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";
import ModalDelete from "../../global/ModalDelete";

const CardUser = () => {
  const { UserPersistence } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const deleted = () => {
    setOpenModal(true);
    console.log("deleted");
  };

  if (!UserPersistence) {
    return <LoadingOutlined />;
  }

  const User = UserPersistence.user && UserPersistence.user;

  const avatar =
    User && User.names ? (
      User.names.split("")[0].toUpperCase()
    ) : (
      <LoadingOutlined />
    );

  const content = (
    <>
      <section className="p-2 w-full  text-[#7A7A7A] text-lg font-bold border-b-2 border-[#242424]">
        {User && (
          <div className=" p-2 ">
            <p>Id : {User.id}</p>
            <p>{User.email}</p>
            <input
              onChange={handleChange}
              value={User.names}
              type="text"
              className="focus:outline-0 bg-transparent text-[#7A7A7A]  font-bold w-full "
            />
          </div>
        )}
        <div className="flex justify-evenly w-full pt-2">
          <div className="w-[50%] flex justify-center cursor-pointer rounded-md py-2 hover:bg-blue-500 hover:bg-opacity-20 hover:border-blue-500 ease-out duration-300">
            <SvgIconEdit />
          </div>
          <div
            onClick={deleted}
            className="w-[50%] flex justify-center cursor-pointer rounded-md py-2 hover:bg-red-500 hover:bg-opacity-20 hover:border-red-500 ease-out duration-300"
          >
            <SvgIconDelete />
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <div className="relative">
        <div
          onClick={toggleMenu}
          className="inline-flex items-center overflow-hidden rounded-md border-2 bg-black border-[#242424] px-4 py-2 cursor-pointer hover:border-yellow-500"
        >
          <p className="text-yellow-500 font-bold  ">{avatar}</p>
        </div>

        {isMenuOpen && (
          <div
            className="absolute end-0 -right-10 z-10 mt-2 w-[15rem] rounded-xl border   border-[#242424] backdrop-blur-md  "
            role="menu"
          >
            {content}
          </div>
        )}
      </div>
      {openModal && (
        <ModalDelete
          name={User.names}
          id={User.id}
          close={setOpenModal}
          textConfirm="Eescribe "
        />
      )}
    </>
  );
};

export default CardUser;
