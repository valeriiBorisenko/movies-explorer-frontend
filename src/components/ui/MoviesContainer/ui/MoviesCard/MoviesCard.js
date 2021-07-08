import { useEffect, useState } from "react";
import { MOVIES_API_URL } from "../../../../../utils/Api/configApi";

function MoviesCard({ 
  country,
  director,
  duration,
  year,
  description,
  nameRU,
  nameEN,
  image,
  trailer,
  trailerLink,
  movieId,
  id,
  _id,
  typeTrue, 
  typeFalse, 
  buttonTrue, 
  handleClickSaveMovie,
  handleCardDelete,
  savedMovies,
  savedMovieIds,
  isSavedMoviesPage
}) {
  let hours = Math.trunc(duration / 60);
  let minutes = duration % 60;
  let time = hours > 0 ? (hours + 'ч ' + minutes + 'м') : (minutes + 'м');

  const [isLiked, setIsLiked] = useState(false);

  const buttonTitle = isLiked ? "" : buttonTrue;
  const sectionClass = isLiked ? typeTrue : typeFalse;

  const key = movieId === undefined? id : movieId
  const trailerUrl = trailer === undefined? trailerLink : trailer
  const thumbnailUrl = image.url? `${MOVIES_API_URL}${image.formats.thumbnail.url}` : ''
  const imageUrl = image.url? `${MOVIES_API_URL}${image.url}` : image

  function clickButtonMovies() {
    if (!isLiked && !isSavedMoviesPage) {

      handleClickSaveMovie({
        country: country || 'Данные отсутствуют',
        director: director || 'Данные отсутствуют',
        duration: duration || 0,
        year: year || 'Данные отсутствуют',
        description: description || '',
        image: imageUrl || 'https://unsplash.com/photos/49uySSA678U',
        trailer: trailerLink || 'https://youtube.com',
        thumbnail: thumbnailUrl || 'https://unsplash.com/photos/49uySSA678U',
        movieId: id || movieId,
        nameRU: nameRU || 'Данные отсутствуют',
        nameEN: nameEN || 'Данные отсутствуют',
      })
    } else if (isSavedMoviesPage) {
      handleCardDelete({movieId, _id})
    }
    else {
      const movieForDelete = savedMovies.find((movieData) => 
        (movieData.nameRU === nameRU) ? movieData : '')
      handleCardDelete(movieForDelete)
    }
  }

  useEffect (() => {
    return savedMovieIds && savedMovieIds.includes(key)
    ? setIsLiked(true)
    : setIsLiked(false);
  }, [savedMovieIds, key]);

  return (
    <>
      <a 
        className="movies-card__link"
        href={trailerUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="movies__image" alt={nameRU} src={imageUrl} />
      </a>
      <button className={`movies__button link-opacity movies__button_type_${sectionClass}`} onClick={clickButtonMovies}>{buttonTitle}</button>
      <div className="movies__description">
        <p className="movies__text">{nameRU}</p>
        <p className="movies__time">{time}</p>
      </div>
    </>
  )
}

export default MoviesCard