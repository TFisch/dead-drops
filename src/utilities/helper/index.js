export const cleanUserImage = (imageResponse) => {
  const username = imageResponse.data.username;
  const imageUrl = imageResponse.data.image;
  const image = imageUrl['60x60'].url;
  let userProfile = {
    username,
    image
  };
  return userProfile;
};

export const cleanLocationImage = (imageResponse) => {
  const imageUrl = URL.createObjectURL(imageResponse);
  return imageUrl;
};
