import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [UserPersistence, setUserPersistence] = useState([]);
  const [Folders, setFolders] = useState([]);

  return (
    <>
      <Context.Provider
        value={{ UserPersistence, setUserPersistence, Folders, setFolders }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
