import axios from "axios";
import baseURL from "../Api/api";

export async function getWishlist(userId){
    try {
        const response = await axios.get(baseURL+"favourite-food/customer-favourite/"+userId);
        const res = response.data;
        if (res){
           for(let i = 0; i<res.length; i++){
            let images = await getItemImage(res[i]?.foodItem.id)
            res[i]["images"] = images;
           }
           return res;
        }
        
    } catch (error) {
        throw error
        
    }
}

export async function removeWishlist(favId){
  try {
    const response = await axios.delete(baseURL+"favourite-food/delete-favourite/"+favId);
    return response;
    
  } catch (error) {
    throw error;
    
  }
}

 async function getItemImage(foodId) {
    try {
      const response = await axios.get(
        baseURL + "foodItems/getFoodPic/" + foodId,
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

export async function postWishlist(userId, foodid){
    try {
        const response = await axios.post(baseURL+"favourite-food/customer/"+userId+"/food-item/"+foodid);
        return response.data;
        
    } catch (error) {
        throw error;
        
    }
}