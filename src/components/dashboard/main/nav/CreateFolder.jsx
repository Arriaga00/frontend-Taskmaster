import { useContext, useState } from "react";
import { SvgIconFolder } from "../../../global/svg";
import Context from "../../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";
import {
  GET_FOLDERS,
  POST_CREATE_FOLDER,
} from "../../../../fetch/getAndPostHome";

const CreateFolder = () => {
  const { UserPersistence } = useContext(Context);
  const [inputPlaceholder, setInputPlaceholder] = useState("crea una carpeta");
  const [sendCreateFolder, setSendCreateFolder] = useState({
    id: "",
    name: "",
  });

  if (!UserPersistence) {
    return <LoadingOutlined />;
  }

  const User =
    UserPersistence && UserPersistence.user ? UserPersistence.user : null;

  const captureCreateFolders = (e) => {
    setSendCreateFolder({
      id: User.id,
      name: e.target.value,
    });
  };

  const createFolder = () => {
    setInputPlaceholder("crea una carpeta");
    if (sendCreateFolder.name === "") return;
    setTimeout(() => {
      POST_CREATE_FOLDER(sendCreateFolder);
      GET_FOLDERS(User.id);
    }, 1500);
  };

  return (
    <>
      <label
        className="w-full cursor-pointer flex items-center justify-center rounded-lg  py-1 text-sm  border-dotted border-2 border-[#242424] px-1 text-[#7a7a7a] hover:bg-gray-100 hover:text-gray-700 dark:text-[#7a7a7a] dark:hover:bg-[#242424] dark:hover:text-gray-200 mt-3"
        href="#"
      >
        <SvgIconFolder />
        <input
          type="text"
          className="focus:outline-0 bg-transparent placeholder:text-center text-center w-full"
          placeholder={inputPlaceholder}
          onFocus={() => setInputPlaceholder("")}
          onBlur={createFolder}
          onChange={captureCreateFolders}
        />
      </label>
    </>
  );
};

export default CreateFolder;
