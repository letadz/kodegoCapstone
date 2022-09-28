import axios from "axios";
export const deleteHist = async (id, user, token) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/deleteHistory`,
      {
        user,
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
