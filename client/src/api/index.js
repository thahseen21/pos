import * as ApiConstants from './ApiConstants'

const api = async (path, method, params) => {
  let option, response
  option = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
    },
    mode: 'cors',
    ...(params && { body: JSON.stringify(params) }),
  }

  try {
    response = await fetch(ApiConstants.BASE_URL + path, option)
    if (response.status === 200) {
      response = await response.json()
      console.log(response)
    }
  } catch (error) {
    console.log('error ', error)
    response = error
  }

  return response
}

export default api
