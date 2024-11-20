import axios from "axios";
import baseURL from "../Api/api";

async function orderDelivered(orderId) {
    try {
        const response = await axios.post(baseURL+"orders/food-delivered/"+orderId);
        return response;
        
    } catch (error) {
        console.error(error);
        
    }
  
}

export default orderDelivered
