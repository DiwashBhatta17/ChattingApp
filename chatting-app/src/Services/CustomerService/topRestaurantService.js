import axios from "axios";
import baseURL from "../Api/api";
async function topRestaurantService() {
    try {
        const response = await axios.get(baseURL+"restaurants/topRestaurant");
        return response.data;
        
    } catch (error) {
        throw error;
        
    }  
}
 async function getBannerImage(restaurantId) {
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
  
      return URL.createObjectURL(imageBlob);
    } catch (error) {
      throw error;
    }
  }
  
   async function getProfileImage(restaurantId) {
    try {
      const response = await axios.get(
        baseURL + "restaurants/getRestaurantPic/" + restaurantId,
        {
          responseType: "arraybuffer", 
        }
      );
  
      const imageBlob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
  
      return URL.createObjectURL(imageBlob);
    } catch (error) {
      throw error;
    }
  }

  export async function getTopRestaurant(){
   try {
    const response = await topRestaurantService();
    if(response){
      
      for(let i = 0; i< response.length; i++){
        let bannerImg = await getBannerImage(response[i]?.restaurantId);
        let profileImg = await getProfileImage(response[i]?.restaurantId);
        response[i]["bannerImg"] = bannerImg;
        response[i]["profileImg"] = profileImg;  
      }
      return response;
    }
    
   } catch (error) {
    console.error(error);
    throw error;
    
   }

  }
export default getTopRestaurant;
