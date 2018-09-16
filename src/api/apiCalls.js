import { cleanImage } from '../utilities/helper/'
import { key } from '../hidden/hidden'

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
  return data.data;
}

export const fetchLocation = async (coordinatesEntry) => {
  try {
    const { longitude, latitude, codeLog } = coordinatesEntry;
    const url = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${longitude},${latitude}&key=${key}`
    const response = await fetch(url);
    const data = await response.blob();
    const imageUrl = URL.createObjectURL(data)
    const searchedLocation = {
      long: longitude,
      lat: latitude,
      locationImage: imageUrl,
      verificationCode: codeLog
    }
    return searchedLocation;
  } catch (error) {
    console.log(error.message);
  }
}

export const postPin = async (note, token) => {
  try {
    const url = `https://api.pinterest.com/v1/pins/?access_token=${token}&fields=id%2Clink%2Cnote%2Curl`
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        "data": {
          'board': 'deaddrops',
          "note": "note",
          "url": "https://www.pinterest.com/pin/864409722205273908/",
        }
      }),
    })
    const result = await response.json();
  } catch (error) {
    console.log(error.message)
  }
}




