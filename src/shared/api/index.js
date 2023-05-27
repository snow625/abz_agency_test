import axios from "axios";

export const baseURL = import.meta.env.VITE_APP_API;

const errorWrapper = async (request) => {
  try {
    const { data } = await request;
    if (data?.success) {
      return data;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const instance = axios.create({
  baseURL,
});

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

export default { getUsers };
