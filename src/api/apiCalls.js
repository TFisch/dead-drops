import { cleanImage, cleanUsername } from '../utilities/helper'


export const fetchUserImage = async (token) => {
  const url = `https://api.pinterest.com/v1/users/me/?access_token=${token}&fields=image%2Cusername`
  const response = await fetch(url);
  const data = await response.json();
  const cleanedImage = await cleanImage(data);
  return cleanedImage;
}

export const fetchDropBoard = async (token) => {
  const url = `https://api.pinterest.com/v1/deaddrops/dead-drops/sections/?access_token=${token}`
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}





