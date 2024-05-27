const SearhForState = () => {
  return (
    <>
      <section className="w-full  flex justify-between items-center gap-2 text-sm m-2 text-[#707070]">
        <span className=" px-2 rounded-full py-1 cursor-pointer bg-blue-500 bg-opacity-20 text-blue-400">
          all
        </span>
        <div className="flex  items-center gap-2 text-sm m-2 text-[#707070]">
          <span className="bg-[#242424] px-2 rounded-full py-1 cursor-pointer hover:bg-blue-500 hover:bg-opacity-15 hover:text-blue-500 ">
            pending
          </span>
          <span className="bg-[#242424] px-2 rounded-full py-1 cursor-pointer hover:bg-green-500 hover:bg-opacity-15 hover:text-green-500">
            done
          </span>
          <span className="bg-[#242424] px-2 rounded-full py-1 cursor-pointer hover:bg-red-500 hover:bg-opacity-15 hover:text-red-500">
            cancelled
          </span>
        </div>
      </section>
    </>
  );
};

export default SearhForState;
