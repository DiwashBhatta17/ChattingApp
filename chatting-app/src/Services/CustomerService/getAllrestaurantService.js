import axios from "axios";
import baseURL from "../Api/api";

async function getAllrestaurantService() {
  try {
    const response = await axios.get(baseURL+"restaurants/get-all-restaurants");
    return response.data;
    
  } catch (error) {
    throw error;  
  }
   
}

export async function getBannerImage(restaurantId) {
  try {
    const response = await axios.get(
      baseURL + "restaurants/getRestaurantBannerImage/" + restaurantId,
      {
        responseType: "arraybuffer", // Specify the response type as arraybuffer
      }
    );

    const imageBlob = new Blob([response.data], {
      type: response.headers["content-type"],
    });

    return imageBlob;
  } catch (error) {
    throw error;
  }
}

export async function getProfileImage(restaurantId) {
  try {
    const response = await axios.get(
      baseURL + "restaurants/getRestaurantPic/" + restaurantId,
      {
        responseType: "arraybuffer", // Specify the response type as arraybuffer
      }
    );

    const imageBlob = new Blob([response.data], {
      type: response.headers["content-type"],
    });

    return imageBlob;
  } catch (error) {
    throw error;
  }
}
export default getAllrestaurantService;
