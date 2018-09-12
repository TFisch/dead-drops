export const cleanImage = (imageResponse) => {
  const image = imageResponse.data.image;
  const username = imageResponse.data.username
  console.log(username);
  return image['60x60'].url;
}

