import axios from 'axios'
import baseURL from '../Api/api'

async function addMessage(chatbody) {
    try {
        const response = await axios.post(baseURL+'addMessage',chatbody)
        return response.data
        
    } catch (error) {
        throw error
        
    }
  
}

export default addMessage
