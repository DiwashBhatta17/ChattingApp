import axios from 'axios'
import React from 'react'
import baseURL from '../Api/api'

async function chatlistService(username) {
  try {
    const response = await axios.get(baseURL+'getFriendList/'+ username);
    return response.data;
    
  } catch (error) {
    console.error(error);
    
  }
}

export default chatlistService
