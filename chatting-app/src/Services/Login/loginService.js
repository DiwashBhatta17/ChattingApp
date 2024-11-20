import axios from "axios";
import baseURL from "../Api/api";

async function loginService(loginData) {
    try {
        const response = await axios.post(baseURL+"login", loginData);
        return response.data;
        
    } catch (error) {
        throw error;
        
    }
  
}

export default loginService;
