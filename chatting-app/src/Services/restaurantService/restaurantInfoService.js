import axios from "axios"
import baseURL from "../Api/api"

async function restaurantInfoService() {
    const userId =localStorage.getItem("restaurantId")
    try {
        if(userId){
            const response = await axios.get(baseURL+"restaurants/get-restaurant/"+userId);
            return response.data 
        }   
    } catch (error) {
        throw error;     
    }
 
}

export default restaurantInfoService
