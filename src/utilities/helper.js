export const cleanImage = (imageResponse) => {
  const username = imageResponse.data.username
  const imageUrl = imageResponse.data.image;
  const image = imageUrl['60x60'].url;
  let userProfile = {
    username,
    image
  }
  return userProfile;
}

export const cleanBoard = (boardResponse) => {

  const pinData = boardResponse.data.map(pin => pin)
  console.log(pinData);
  return pinData;
}