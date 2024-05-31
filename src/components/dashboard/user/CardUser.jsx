import { Popover, ConfigProvider, theme, Space } from "antd";
import { useContext, useState } from "react";
import { SvgIconDelete, SvgIconEdit } from "../../../components/global/svg";
import Context from "../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";

const CardUser = () => {
  const { UserPersistence } = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const deleted = () => {
    console.log("deleted");
  };

  if (!UserPersistence) {
    <LoadingOutlined />;
  }
  const User =
    UserPersistence && UserPersistence.user ? (
      UserPersistence.user
    ) : (
      <LoadingOutlined />
    );

  const avatar =
    User && User.names ? (
      User.names.split("")[0].toUpperCase()
    ) : (
      <LoadingOutlined />
    );

  console.log(User);

  const content = (
    <>
      <div className=" text-[#7A7A7A] text-lg font-bold border-b-2 border-[#242424] p-2 w-60 ">
        <p>Id : {User.id}</p>
        <p>{User.email}</p>
        <input
          value={User.names}
          type="text"
          className="focus:outline-0 bg-transparent text-[#7A7A7A]  font-bold  "
        />
        <p className="flex h-10 items-center">
          Password :{" "}
          <input
            placeholder="********"
            type="password"
            className="focus:outline-0 bg-transparent text-[#7A7A7A]  font-bold  w-[60%]"
          />
        </p>
      </div>
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
    </>
  );
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            algorithm: theme.darkAlgorithm,
          },
        }}
      >
        <Space>
          <Popover
            overlayClassName="my-popover"
            content={content}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <div className="py-2 px-4 rounded-full border-2 border-[#242424]  flex justify-center items-center  drop-shadow-2xl text-center hover:bg-blue-500 hover:bg-opacity-10 hover:border-blue-500 ease-out duration-300 cursor-pointer">
              <p className="font-bold text-blue-500">{avatar}</p>
            </div>
            {/* <img
              src={"data:image/png;base64," + User.image}
              alt="user"
              className="rounded-full w-10 h-10 cursor-pointer"
            /> */}
          </Popover>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default CardUser;
