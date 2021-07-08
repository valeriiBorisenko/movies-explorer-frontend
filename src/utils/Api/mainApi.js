import { MAIN_API_URL } from "./configApi";
import onError from './onError'

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(onError);
  };

  saveMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movieData),
    })
      .then(onError);
  };

  removeMovie(movieForDelete) {
    return fetch(`${this._baseUrl}/movies/${movieForDelete._id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(onError);
  };

  updateUserProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email })
    })
      .then(onError);
  }

  updateToken(){
    this._headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('token')}`
  }
})

export default mainApi;