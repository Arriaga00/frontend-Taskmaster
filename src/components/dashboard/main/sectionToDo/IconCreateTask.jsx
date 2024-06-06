import { PlusOutlined } from "@ant-design/icons";

const IconCreateTask = ({ openCereateTask }) => {
  return (
    <button
      onClick={openCereateTask}
      className="fixed bottom-2 right-0 mb-5 mr-5  p-2 px-3 rounded-full bg-green-500  bg-opacity-30  cursor-pointer text-green-500 hover:bg-opacity-40 ease-out duration-300"
    >
      <PlusOutlined />
    </button>
  );
};

export default IconCreateTask;
