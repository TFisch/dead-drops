import { cleanUserImage, cleanLocationImage } from '../utilities/helper/';
import { key } from '../hidden/hidden';

export const fetchUserImage = async (token) => {
  const url = `https://api.pinterest.com/v1/users/me/?access_token=${token}&fields=image%2Cusername`;
  const response = await fetch(url);
  const data = await response.json();
  const cleanedImage = await cleanUserImage(data);
  return cleanedImage;
};

export const fetchDropBoard = async (token) => {
  const url = `https://api.pinterest.com/v1/boards/deaddrops/dead-drops-official/pins/?access_token=${token}&fields=id%2Clink%2Cnote%2Curl%2Cimage`;
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

export const fetchLocation = async (coordinatesEntry) => {
  try {
    const { longitude, latitude } = coordinatesEntry;
    const url = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${latitude},${longitude}&key=${key}`;
    const response = await fetch(url);
    const data = await response.blob();
    const cleanedImage = await cleanLocationImage(data);

    const searchedLocation = {
      long: longitude,
      lat: latitude,
      locationImage: cleanedImage,
    };
    return searchedLocation;
  } catch (error) {
    console.log(error.message);
  }
};

export const postPin = async (note, token) => {
  const image = 'https://postimg.cc/3dFYfCpr';
  try {
    const url = `https://api.pinterest.com/v1/pins/?access_token=${token}&fields=id%2Clink%2Cnote%2Curl&board=deaddrops/dead-drops&note=${note}&image_url=${image}`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        board: 'deaddrops/dead-drops',
        note: note,
        image_url: image
      })
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchAccessToken = async (id, authcode) => {
  const accessTokenUrl = 'https://api.pinterest.com/v1/oauth/token?' +
    'grant_type=authorization_code&' +
    'client_id=4987807426915878592&' +
    `client_secret=${id}&` +
    `code=${authcode}`;
  const response = await fetch(accessTokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded '
    }
  });
  const result = await response.json();
  return result;
};




