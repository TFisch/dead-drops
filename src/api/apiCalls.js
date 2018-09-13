import { cleanImage, cleanBoard } from '../utilities/helper'


export const fetchUserImage = async (token) => {
  const url = `https://api.pinterest.com/v1/users/me/?access_token=${token}&fields=image%2Cusername`
  const response = await fetch(url);
  const data = await response.json();
  const cleanedImage = await cleanImage(data);
  return cleanedImage;
}

export const fetchDropBoard = async (token) => {
  const url = `https://api.pinterest.com/v1/boards/deaddrops/dead-drops/pins/?access_token=${token}&fields=id%2Clink%2Cnote%2Curl%2Cimage`
  const response = await fetch(url);
  const data = await response.json();
  const cleanedBoard = await cleanBoard(data);
  return cleanedBoard;
}





