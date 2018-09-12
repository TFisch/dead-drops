export const cleanImage = (imageResponse) => {
  const image = imageResponse.data.image;
  return image['60x60'].url;

}