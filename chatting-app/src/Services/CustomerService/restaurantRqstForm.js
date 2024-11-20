import axios from 'axios'
import baseURL from '../Api/api';

async function restaurantRqstForm(data) {
 try {
    const response = await axios.post(baseURL+"restaurants/restaurantMail", data);
    return response.data;
    
 } catch (error) {
    throw error  
 }
}

export default restaurantRqstForm
