import { message } from "antd";

export const POST_LOGIN = async (
  data,
  setLoading,
  navigate,
  setUserPersistence
) => {
  return await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        message.error(data.msg);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return data;
    })
    .then((data) => {
      setUserPersistence(data);
      window.localStorage.setItem("loguinUser", true);
      window.localStorage.setItem("UserData", JSON.stringify(data));
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1500);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
};

export const POST_SIGNUP = async (data, setLoading, navigate) => {
  return await fetch("http://localhost:3000/api/users/save-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
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
        navigate("/home/login");
      }, 1500);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
};
