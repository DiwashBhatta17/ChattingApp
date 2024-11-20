import axios from "axios";
import baseURL from "../Api/api";

async function profileService(userId) {
    try {
        const response = await axios.get(baseURL+"customers/get-customer/"+userId);
        return response.data; 
        
    } catch (error) {
        throw error;
        
    }
 
}

export default profileService;

