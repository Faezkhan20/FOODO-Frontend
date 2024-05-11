
import api from "./axios.config";

export const getCart = async (user) => {
  const res = await api.get(`/get-cart/${user._id}`);
  const data = await res.data;
  return data;
};
