import onError from './onError'
import { MOVIES_API_URL } from './configApi'

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: "GET",
      headers: { "Content-type": "application/json" }
    })
      .then(onError)
  }
}

const moviesApi = new Api({
  baseUrl: MOVIES_API_URL,
})

export default moviesApi