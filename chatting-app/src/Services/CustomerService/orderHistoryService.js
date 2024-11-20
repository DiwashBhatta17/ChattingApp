import axios from "axios"
import baseURL from "../Api/api"

 async function orderHistoryService(id) {
    try {
        const response = await axios.get(baseURL+"customers/customerHistory/"+id)
        return response.data;
    } catch (error) {
        throw error;
        
    }
 
}

export default orderHistoryService;
