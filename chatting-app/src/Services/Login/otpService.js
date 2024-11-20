import axios from "axios";
import baseURL from "../Api/api";

async function otpService(otpValue) {
   
    try {
      

        const response = await axios.post(baseURL + 'verify-otp', otpValue, {
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            }
        });


        console.log("Request Data:", otpValue);
        console.log("Response:", response.data);
        
    } catch (error) {
        throw error;
        
    }

 
  
  
}

export default otpService;
