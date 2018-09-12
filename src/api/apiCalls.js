import { cleanImage } from '../utilities/helper'


export const fetchUserImage = async (token) => {
  const url = `https://api.pinterest.com/v1/users/me/?access_token=${token}&fields=image`
  const response = await fetch(url);
  const data = await response.json();
  const cleanedImage = await cleanImage(data);
  return cleanedImage;
}




