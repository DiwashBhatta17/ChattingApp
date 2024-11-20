import axios from "axios";
import baseURL from "../Api/api";

async function signupService(data) {
  try {
    const response = await axios.post(baseURL + "register-customer", data);
    return response;
  } catch (error) {
    throw error;
  }
}

export default signupService;
