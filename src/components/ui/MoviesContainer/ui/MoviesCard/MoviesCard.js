import { useState } from "react";

function MoviesCard({ name, urlImage, id, duration, typeTrue, typeFalse, buttonTrue }) {

  let hours = Math.trunc(duration / 60);
  let minutes = duration % 60;
  let time = hours > 0 ? (hours + 'ч ' + minutes + 'м') : (minutes + 'м');

  const [isSavedMovie, setIsSavedMovied] = useState(false)

  function clickButtonMovies() {
    setIsSavedMovied(!isSavedMovie);
  }

  const buttonTitle = isSavedMovie ? "" : buttonTrue;
  const sectionClass = isSavedMovie ? typeTrue : typeFalse;

  return (
    <li className="movies-card" key={id}>
      <img className="movies__image" alt={name} src={urlImage} />
      <button className={`movies__button link-opacity movies__button_type_${sectionClass}`} onClick={clickButtonMovies}>{buttonTitle}</button>
      <div className="movies__description">
        <p className="movies__text">{name}</p>
        <p className="movies__time">{time}</p>
      </div>
    </li>
  )
}

export default MoviesCard