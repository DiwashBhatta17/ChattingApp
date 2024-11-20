import axios from 'axios';
import baseURL from '../Api/api';

async function restaurantDescriptionService(restaurantId) {
    try {
        const response = await axios.get(baseURL+"restaurants/get-restaurant/"+restaurantId)
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

  export async function getRestaurantService(restaurantId){
   try {
    const response = await restaurantDescriptionService(restaurantId);
    console.log(response);
    if(response){

        let bannerImg = await getBannerImage(restaurantId);
        let profileImg = await getProfileImage(restaurantId);
        response["bannerImg"] = bannerImg;
        response["profileImg"] = profileImg;  
      }
      return response;
    }
    
    catch (error) {
    console.error(error);
    throw error;
    
   }

  }

export default getRestaurantService;
