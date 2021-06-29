import { useEffect, useState } from 'react';
import MoviesCard from '../ui/MoviesCard/MoviesCard'
import Preloader from '../../../ui/Preloader/Preloader'
import TitleH2 from '../../TitleH2/TitleH2';
import { moviesUrl } from '../../../../utils/Api/configApi';

function MoviesCardList({ data, buttonTrue, typeTrue, typeFalse, isLoading, isError }) {

  const [visibleMovie, setVisibleMovie] = useState('')
  const [windowWidth, setWindowWidth] = useState(0)
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setVisibleMovie(5);
    } else if (windowWidth >= 1124) {
      setVisibleMovie(12)
    } else {
      setVisibleMovie(8)
    }
  }, [windowWidth]);

  const showMoreMovie = () => {
    if (windowWidth < 768) {
      setVisibleMovie((prevValue) => prevValue + 5)
    } else if (windowWidth >= 1124) {
      setVisibleMovie((prevValue) => prevValue + 3)
    } else {
      setVisibleMovie((prevValue) => prevValue + 2)
    }
  }

  const buttonHiden =
    (windowWidth < 768 && data.length < 5 ? "movie-card-list__button_hiden" : "") ||
    (windowWidth >= 1124 && data.length < 12 ? "movie-card-list__button_hiden" : "") ||
    (windowWidth >= 768 && windowWidth < 1124 && data.length < 8 ? "movie-card-list__button_hiden" : "") ||
    (data.length <= visibleMovie ? "movie-card-list__button_hiden" : "");

  const renderMovies = isError ?
    (<TitleH2
      title="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
      sectionClass="movie-card-list-title"
    />) :
    (
      <>
        <ul className="movie-card-list__container">
          {
            data.slice(0, visibleMovie).map((item) =>
              <MoviesCard
                name={item.nameRU}
                urlImage={`${moviesUrl}${item.image.url}`}
                duration={item.duration}
                key={item.id}
                buttonTrue={buttonTrue}
                typeTrue={typeTrue}
                typeFalse={typeFalse}
              />
            )
          }
        </ul>
        <button button className={`movie-card-list__button link-opacity ${buttonHiden}`} onClick={showMoreMovie}>Ещё</button>
      </>
    )

  return isLoading ?
    (<Preloader />) :
    (<section className="movie-card-list">{renderMovies}</section>)
}

export default MoviesCardList;
