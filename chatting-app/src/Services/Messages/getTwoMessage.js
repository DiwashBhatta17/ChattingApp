import React from 'react'
import baseURL from '../Api/api'
import axios from 'axios';

async function getTwoMessage(username, friend) {
  try {
    const response = await axios.get(baseURL+'getChatList/'+username+'/'+friend);
    return response.data
    
  } catch (error) {
    console.error(error);
    
  }
}

export default getTwoMessage
