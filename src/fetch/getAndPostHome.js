import { message } from "antd";

export const GET_TASKS = async (id, setTasks) => {
  return await fetch(
    `https://api-taskmaster.up.railway.app/api/tasks/consult-tasks/${id}`
  )
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        message.error(data.msg);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return data;
    })
    .then((data) => {
      window.localStorage.setItem("Task", JSON.stringify(data));
      setTasks(data);
      console.table(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const GET_FOLDERS = async (id, setFolders) => {
  return await fetch(
    `https://api-taskmaster.up.railway.app/api/folders/get-folders/${id}`
  )
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        message.error(data.msg);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return data;
    })
    .then((data) => {
      window.localStorage.setItem("Folders", JSON.stringify(data));
      setFolders(data);
      console.table(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const POST_LOGIN = async (
//   data,
//   setLoading,
//   navigate,
//   setUserPersistence
// ) => {
//   return await fetch("https://api-taskmaster.up.railway.app/api/auth/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then(async (response) => {
//       const data = await response.json();
//       if (!response.ok) {
//         message.error(data.msg);
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       // const imageBase64 = data.user.image;
//       // const image = "data:image/png;base64," + imageBase64;

//       // console.log(image);

//       return data;
//     })
//     .then((data) => {
//       setUserPersistence(data);
//       window.localStorage.setItem("loguinUser", true);
//       window.localStorage.setItem("UserData", JSON.stringify(data));

//       setTimeout(() => {
//         setLoading(false);
//         navigate("/dashboard");
//       }, 1500);
//     })
//     .catch((error) => {
//       setLoading(false);
//       console.log(error);
//     });
// };

export const POST_SIGNUP = async (data, setLoading, navigate) => {
  return await fetch(
    "https://api-taskmaster.up.railway.app/api/users/save-user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        message.error(data.msg);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return data;
    })
    .then(() => {
      message.success("Usuario creado correctamente");
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 1500);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
};

export const POST_CREATE_CATEGORY = async (data, id, setFolders) => {
  return await fetch(
    "https://api-taskmaster.up.railway.app/api/categories/save-category",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        message.error(data.msg);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return data;
    })
    .then(() => {
      window.localStorage.removeItem("Folders");
    })
    .then(() => {
      GET_FOLDERS(id, setFolders);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const POST_CREATE_FOLDER = async (data) => {
  return await fetch(
    "https://api-taskmaster.up.railway.app/api/folders/save-folder",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        message.error(data.msg);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return data;
    })
    .then(() => {
      window.localStorage.removeItem("Folders");
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const DELETE_CATEGORY = async (id) => {
//   return await fetch(
//     `https://api-taskmaster.up.railway.app/api/categories/delete-category/${id}`,
//     {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id }),
//     }
//   )
//     .then((response) => response.json())
//     .then(() => {
//       window.localStorage.removeItem("Folders");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const DELETE_FOLDER = async (id) => {
//   return await fetch(`https://api-taskmaster.up.railway.app/api/categories/delete-category`,{
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({id}),
//   })
//     .then(async (response) => {
//       const data = await response.json();
//       if (!response.ok) {
//         message.error(data.msg);
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return data;
//     })
//     .then(() => {
//       window.localStorage.removeItem("Folders");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
