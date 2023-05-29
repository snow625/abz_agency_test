import axios from "axios";
import toast from "react-hot-toast";
export const baseURL = import.meta.env.VITE_APP_API;

const notificationError = (error) => {
  if (error?.response?.data?.fails) {
    const errorObj = error.response.data.fails;
    const errorMessage = [];
    Object.keys(errorObj).forEach((key) => {
      errorMessage.push(...errorMessage, ...errorObj[key]);
    });
    return toast.error(errorMessage);
  }

  toast.error(
    error?.response?.data?.message ? error.response.data.message : error.message
  );
};

const errorWrapper = async (request, notification = false) => {
  try {
    const { data } = await request;
    if (data?.success) {
      return data;
    }
    return false;
  } catch (error) {
    if (notification) {
      notificationError(error);
    }
    return false;
  }
};

const setToken = (token = "") => {
  if (token) {
    return (instance.defaults.headers.Token = token);
  }
};

const instance = axios.create({
  baseURL,
});

const login = async () => {
  try {
    const { data } = await instance.get("/token");
    setToken(data.token);
    return true;
  } catch (error) {
    return false;
  }
};

const createNewUser = async (formData) => {
  const token = await login();
  if (token) {
    return await errorWrapper(instance.post(`/users`, formData), true);
  }
};

const getUsers = async ({ page = 1, offset = 0, count = 5 }) => {
  return await errorWrapper(
    instance.get(`/users`, {
      params: {
        page,
        offset,
        count,
      },
    })
  );
};

export default { getUsers, createNewUser };
