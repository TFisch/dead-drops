


export const fetchUserImage = async => {
  const url = 'https://api.pinterest.com/v1/first_name?access_token={token}'
  const response = await fetch(url);
}

