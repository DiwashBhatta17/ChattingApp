import axios from "axios";
import baseURL from "../Api/api";

async function orderItemService(restaurantId) {
    try {
        const response = await axios.get(baseURL+"orders/get-all/"+restaurantId)
        return response.data;   
    } catch (error) {
        throw error;

        
    }
 
}

export default orderItemService
