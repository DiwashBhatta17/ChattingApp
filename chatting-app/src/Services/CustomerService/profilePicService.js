import axios from "axios";
import baseURL from "../Api/api";

export async function uploadPic( formdata) {
    try {
        const userId = localStorage.getItem("customerId");
        const response  = await axios.post(baseURL+"customers/uploadCustomerPic/"+ userId, formdata);
        return response;
        
    } catch (error) {
        throw error
        
    }
 
}

export async function getPic(customerId) {
    try {
        const response  = await axios.get(baseURL+"customers/getCustomerPic/"+customerId,
        {
        responseType: "arraybuffer",
        });
        
        const imageBlob = new Blob([response.data],
            {type: response.headers["content-type"],
        });

        return URL.createObjectURL(imageBlob); 
        
        
        
        
    } catch (error) {
        throw error;
        
    }
 
}

