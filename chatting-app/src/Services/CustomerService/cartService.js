import axios from "axios";
import baseURL from "../Api/api";

async function cartService(customerId, foodId) {
  try {
    const response = await axios.post(
      baseURL + "carts/customer/" + customerId + "/food-item/" + foodId
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function getCartItem(userId) {
  try {
    const response = await axios.get(
      baseURL + "carts/get-cart-by-customer/" + userId
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function addQuantity(cartId, foodId) {
  try {
    const response = await axios.put(
      baseURL + "carts/increase/food-item/"+foodId+"/cart/"+cartId
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function removeCart(itemId) {
  try {
    const response = await axios.delete(
      baseURL + "carts/delete-cartItem/"+itemId
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function subQuantity(cartId, foodId) {
  try {
    const response = await axios.put(
      baseURL + "carts/decrease/food-item/"+foodId+"/cart/"+cartId
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function confirmOrder(customerId, data){
    try {
        const response = await axios.post(baseURL+"orders/customer/"+customerId, data)
        return response;
        
    } catch (error) {
        throw error
        
    }
}

export default cartService;
