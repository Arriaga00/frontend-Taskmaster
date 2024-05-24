import { useEffect, useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [UserPersistence, setUserPersistence] = useState([]);
  const [Folders, setFolders] = useState([]);

  const PersistenceSession = () => {
    const storage = localStorage.getItem("UserData");
    if (storage) {
      const user = JSON.parse(storage);
      setUserPersistence(user);
    }

    const storageFolders = localStorage.getItem("Folders");
    if (storageFolders) {
      const folders = JSON.parse(storageFolders);
      setFolders(folders);
    }
  };

  useEffect(() => {
    PersistenceSession();
  }, []);

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
