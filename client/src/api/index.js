import axios from "axios";

export const login = async (email, password) => {
  console.log("Login Start");
  try {
    const response = await axios.post("/api/user/login", { email, password });
    console.log(`Token is: ${response.data}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (username, email, password, confirmPassword) => {
  console.log("Register Start");
  try {
    const { data } = await axios.post("/api/user/register", {
      username,
      email,
      password,
      confirmPassword,
    });
    return { data: { email, password } };
  } catch (error) {
    console.log(error);
  }
};
