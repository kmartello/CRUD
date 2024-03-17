import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error.message);
  }
};
