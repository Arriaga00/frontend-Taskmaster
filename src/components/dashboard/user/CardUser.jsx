import { useState } from "react";
import { useContext } from "react";
import { SvgIconDelete, SvgIconEdit } from "../../../components/global/svg";
import Context from "../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";
import ModalDelete from "../../global/ModalDelete";
import { message } from "antd";

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

  const funcionDelete = (data) => {
    if (data.name === User.names) {
      fetch(`http://localhost:3000/api/users/delete-user/${User.id}`)
        .then((response) => response.json())
        .then(() => {
          message.success("Gracias por usar la aplicación");
        })
        .then(() => {
          setTimeout(() => {
            window.localStorage.clear();
            window.location.href = "/";
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setOpenModal(false);
        });
    }
  };

  const content = (
    <>
      <section className="p-2 w-full  text-[#7A7A7A] text-lg font-bold ">
        {User && (
          <div className=" p-2 ">
            <p>Id : {User.id}</p>
            <p>{User.email}</p>
            <input
              onChange={handleChange}
              value={User.names}
              type="text"
              className="focus:outline-0 bg-transparent text-[#7A7A7A] font-bold w-full "
            />
          </div>
        )}
        <div className="flex justify-evenly w-full pt-2">
          <div className="w-[50%] flex justify-center cursor-pointer rounded-md py-2 hover:bg-blue-500 hover:bg-opacity-20 hover:border-blue-500 ease-out duration-300">
            <SvgIconEdit />
          </div>
          <button
            onClick={deleted}
            className="w-[50%] flex justify-center cursor-pointer rounded-md py-2 hover:bg-red-500 hover:bg-opacity-20 hover:border-red-500 ease-out duration-300"
          >
            <SvgIconDelete />
          </button>
        </div>
      </section>
    </>
  );

  return (
    <>
      <div className="relative">
        <div
          onClick={toggleMenu}
          className="inline-flex items-center overflow-hidden rounded-md  bg-black border-[#242424] px-4 py-1 cursor-pointer hover:bg-yellow-500 hover:bg-opacity-10"
        >
          <p className="text-yellow-500 font-bold  ">{avatar}</p>
        </div>

        {isMenuOpen && (
          <div
            className="absolute end-0 -right-10 z-10 mt-2 w-[15rem] rounded-xl border   border-[#242424]  backdrop-blur-[64px] bg-white/10 "
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
          closes={setOpenModal}
          textConfirm="Eescribe "
          fetchs={funcionDelete}
        />
      )}
    </>
  );
};

export default CardUser;
