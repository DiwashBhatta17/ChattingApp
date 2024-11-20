import axios from "axios";
import baseURL from "../Api/api";
async function searchRestaurantService(query) {
    try {
        const response = await axios.get(baseURL+"restaurants/searchRestaurant/"+query);
        return response.data;
        
    } catch (error) {
        throw error;
        
    }
 
}

export default searchRestaurantService
