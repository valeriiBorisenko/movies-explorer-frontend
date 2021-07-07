import { MAIN_API_URL } from './configApi';
import onError from './onError'

class AuthApi {
  constructor({ baseUrl }){
    this._baseUrl = baseUrl;
  }

  postRegisterUser(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(onError);
  }

  postLoginUser(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(onError);
  }

  getUserToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(onError);
  }
}

  const authApi = new AuthApi ({
    baseUrl: MAIN_API_URL,
  })

  export default authApi;
