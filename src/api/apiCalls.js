import { id } from '../../hidden/hidden'

// export const fetchUserImage = async => {
//   const url = `https://api.pinterest.com/v1/users/{user}/?access_token={token}&fields=image`
//   const response = await fetch(url);
// }

export const retrieveToken = async (code) => {
  const data = {
    grant_type: 'authorization_code',
    client_id: '4987807426915878592',
    client_secret: id,
    code: 'code'
  }

  const url = 'https://api.pinterest.com/v1/oauth/token';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}



