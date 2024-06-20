import { useState } from "react";
import { useContext } from "react";
import { SvgIconDelete, SvgIconEdit } from "../../../components/global/svg";
import Context from "../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";
import ModalDelete from "../../global/ModalDelete";
import { message } from "antd";
import ModalEdit from "../../global/ModalEdit";

const CardUser = () => {
  const { UserPersistence, setUserPersistence } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const deleted = () => {
    setOpenModal(true);
    console.log("deleted");
  };

  if (!UserPersistence) {
    return <LoadingOutlined />;
  }

  const User = UserPersistence.user && UserPersistence.user;

  const avatar = User && User.names ? User.names : <LoadingOutlined />;

  const funcionDelete = (data) => {
    if (data.name === User.names) {
      fetch(
        `https://api-taskmaster.up.railway.app/api/users/delete-user/${User.id}`
      )
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

  const funcionEdit = (data) => {
    setLoading(true);
    console.log({
      id: User.id,
      names: data.name || User.names,
      email: data.email || User.email,
      password: data.password || User.password,
    });

    fetch("https://api-taskmaster.up.railway.app/api/users/update-user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: User.id,
        names: data.name || User.names,
        email: data.email || User.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        message.success("Se actualizó correctamente");
        setOpenModalEdit(false);
      })
      .then(() => {
        fetch(
          `https://api-taskmaster.up.railway.app/api/users/get-user/${User.id}`
        )
          .then((response) => response.json())
          .then((data) => {
            setUserPersistence([
              {
                token: UserPersistence.token,
                user: data,
              },
            ]);
            const userData = JSON.parse(localStorage.getItem("UserData"));
            userData.user = data;
            localStorage.setItem("UserData", JSON.stringify(userData));
          })
          .then(() => {
            setOpenModalEdit(false);
          })
          .catch((error) => {
            console.log(error);
            message.error("Se produjo un error");
          });
      })
      .catch((error) => {
        console.log(error);
        message.error("Se produjo un error");
      })
      .finally(() => {
        setLoading(false);
        setOpenModalEdit(false);
        window.location.reload();
      });
  };

  const content = (
    <>
      <section className="p-2 w-full  text-[#7A7A7A] text-lg font-bold ">
        {User && (
          <div className=" p-2 ">
            <p>Id : {User.id}</p>
            <p className=" w-full">{User.email}</p>
            <p className="focus:outline-0 bg-transparent text-[#7A7A7A] font-bold w-full">
              {User.names}
            </p>
          </div>
        )}
        <div className="flex justify-evenly w-full pt-2">
          <button
            onClick={() => setOpenModalEdit(true)}
            className="w-[50%] flex justify-center cursor-pointer rounded-md py-2 hover:bg-blue-500 hover:bg-opacity-20 hover:border-blue-500 ease-out duration-300"
          >
            <SvgIconEdit size={7} />
          </button>
          <button
            onClick={deleted}
            className="w-[50%] flex justify-center cursor-pointer rounded-md py-2 hover:bg-red-500 hover:bg-opacity-20 hover:border-red-500 ease-out duration-300"
          >
            <SvgIconDelete size={7} />
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
          className="inline-flex items-center overflow-hidden rounded-md  bg-black border-[#242424] px-4 py-1 cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 "
        >
          <p className="text-blue-500 font-bold  ">{avatar}</p>
        </div>

        {isMenuOpen && (
          <div
            className="absolute end-0 -right-10 z-10 mt-2  rounded-xl border   border-[#242424]  bg-black/70 backdrop-blur-xl "
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
      {openModalEdit && (
        <ModalEdit
          name={User.names}
          closeModal={setOpenModalEdit}
          funcionEdit={funcionEdit}
          loading={loading}
          user={true}
          text="actualiza tus datos "
        />
      )}
    </>
  );
};

export default CardUser;
