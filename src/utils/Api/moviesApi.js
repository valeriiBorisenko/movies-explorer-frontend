import onError from './onError'
import { moviesUrl } from './configApi'

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies-`, {
      method: "GET",
      headers: { "Content-type": "application/json" }
    })
      .then(onError)
  }
}

const moviesApi = new Api({
  baseUrl: moviesUrl,
})

export default moviesApi