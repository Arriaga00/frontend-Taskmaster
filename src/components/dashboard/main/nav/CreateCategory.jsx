import { SvgIconCategories } from "../../../global/svg";

const CreateCategory = () => {
  return (
    <>
      <a
        className="w-full flex items-center justify-center rounded-lg  py-2 text-sm  border-dotted border-2 border-[#242424] px-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-[#7a7a7a] dark:hover:bg-[#242424] dark:hover:text-gray-200 mt-3"
        href="#"
      >
        <SvgIconCategories />{" "}
        <span className="text-[.7rem]">crea una categoria</span>
      </a>
    </>
  );
};

export default CreateCategory;
