import React from 'react';
import baseURL from '../Api/api';
import axios from 'axios';

export async function getFood(restaurantId) {
    try {
        const res = await axios.get(baseURL+"foodItems/food/"+restaurantId);
        const response = res.data;
        if(response){
            for(let i = 0; i< response.length; i++){
                let foodImage = await getItemImage(response[i]?.id);
                response[i]["foodImage"] = foodImage;
            }
            return response;

        }

        

    } catch (error) {
        throw error;   
    }
}
export async function getBreakfast(restaurantId){
    try {
        const res = await axios.get(baseURL+"foodItems/breakfast/"+restaurantId);
        const response = res.data;
        if(response){
            for(let i = 0; i< response.length; i++){
                let foodImage = await getItemImage(response[i]?.id);
                response[i]["foodImage"] = foodImage;
            }
            return response;

        }


    } catch (error) {
        throw error;   
    }
}

export async function getSnacks(restaurantId){
    try {
        const res = await axios.get(baseURL+"foodItems/snack/"+restaurantId);
        const response = res.data;
        if(response){
            for(let i = 0; i< response.length; i++){
                let foodImage = await getItemImage(response[i]?.id);
                response[i]["foodImage"] = foodImage;
            }
            return response;

        }

    } catch (error) {
        throw error;   
    }
} 
export async function getDrink(restaurantId){
    try {
        const res = await axios.get(baseURL+"foodItems/drinks/"+restaurantId);
        const response = res.data;
        if(response){
            for(let i = 0; i< response.length; i++){
                let foodImage = await getItemImage(response[i]?.id);
                response[i]["foodImage"] = foodImage;
            }
            return response;

        }

    } catch (error) {
        throw error;   
    }
}
export async function getItemImage(foodId) {
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

  export async function getFoodById(foodId){
    try {
        const res = await axios.get(baseURL+"foodItems/get-food/"+foodId);
        const response = res.data;

        if(response){
            
                let foodImage = await getItemImage(foodId);
                response["foodImage"] = foodImage;
            }
            return response;

        

        
    } catch (error) {
        throw error;
        
    }
  }

