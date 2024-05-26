import { useState } from "react";
import {
  GET_FOLDERS,
  POST_CREATE_CATEGORY,
} from "../../../../fetch/getAndPostHome";

const CreateCategory = ({ folder }) => {
  const [inputPlaceholder, setInputPlaceholder] =
    useState("crea una categoria");

  const [sendCreateFolder, setSendCreateFolder] = useState({
    id: folder.id,
    name: "",
  });

  const captureCreateCategory = (e) => {
    setSendCreateFolder({
      id: folder.id,
      name: e.target.value,
    });
  };

  const createCategories = () => {
    if (sendCreateFolder.name === "") return;
    setInputPlaceholder("crea una categoria");

    setTimeout(() => {
      POST_CREATE_CATEGORY(sendCreateFolder);
      GET_FOLDERS(folder.id);
    }, 1500);
  };
  return (
    <>
      <label className="w-full flex items-center justify-center rounded-lg py-1 text-sm border-dotted border-2 border-[#242424] px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-[#7a7a7a] dark:hover:bg-[#242424] dark:hover:text-gray-200 mt-3">
        <input
          className="text-[.7rem] focus:outline-0 bg-transparent placeholder:text-center text-center w-full"
          placeholder={inputPlaceholder}
          onFocus={() => setInputPlaceholder("")}
          onBlur={createCategories}
          onChange={captureCreateCategory}
        />
      </label>
    </>
  );
};

export default CreateCategory;
