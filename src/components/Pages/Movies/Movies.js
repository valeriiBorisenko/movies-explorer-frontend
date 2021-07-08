import { useEffect, useState } from 'react'

import useFormWithValidation from '../../../hooks/useFormWithValidation'
import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import Search from '../../ui/MoviesContainer/Search/Search'
import MoviesCardList from '../../ui/MoviesContainer/MoviesCardList/MoviesCardList'
import TitleH2 from '../../ui/TitleH2/TitleH2'
import Footer from '../../Footer/Footer'
import moviesFilter from '../../../utils/moviesFilter'
import { titleMoviesCardList } from '../../../utils/constants'

function Movies( { movies, savedMovies, handleClickSaveMovie, handleCardDelete, savedMovieIds }) {

  const [isLoading, setIsLoading] = useState(false)
  const [visibleMovie, setVisibleMovie] = useState('')
  const [windowWidth, setWindowWidth] = useState(0)
  const [buttonHiden, setButtonHiden] = useState('movie-card-list__button_hiden')
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth)
  }

  const { values, handleChange, setValues } = useFormWithValidation();
  const [isCheckBox, setIsCheckBox] = useState(JSON.parse(localStorage.getItem('checkBox')));
  const [inputValue, setInputValue] = useState(JSON.parse(localStorage.getItem('searchValue')))
  const [notFoundValue, setNotFoundValue] = useState(false)
  const [searchMovies, setSearchMovies] = useState([])
  const [isTitleActive, setIsTitleActive] = useState(searchMovies === undefined? false : true);
  const [isTitle, setIsTitle] = useState( searchMovies === undefined? '' : titleMoviesCardList.standart);

  function handleCheckboxChange(){
    if (isCheckBox) {
      setIsCheckBox(false)
      localStorage.setItem('checkBox', JSON.stringify(false))
    } else {
      setIsCheckBox(true)
      localStorage.setItem('checkBox', JSON.stringify(true))
    }

  };

  useEffect(() => setValues({
    movies: JSON.parse(localStorage.getItem('searchValue'))
  }),[setValues])

  function handleSubmit(evt) {
    evt.preventDefault();
    if (values.movies) {
      localStorage.setItem('searchValue', JSON.stringify(values.movies))
      setInputValue(JSON.parse(localStorage.getItem('searchValue')))
    } else {
      setNotFoundValue(true)
    }
  }

  useEffect (() => {
      if ( movies.length !== 0 && inputValue !== null ) {
        setIsLoading(true)
        moviesFilter( inputValue, isCheckBox, movies, setSearchMovies, setIsTitleActive, setIsTitle, setIsLoading )
      } return
  }, [movies, isCheckBox, inputValue])

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
 
    useEffect(() => {
      if (searchMovies !== undefined) {
        setButtonHiden(
          (windowWidth < 768 && searchMovies.length < 5 ? "movie__button_hiden" : "") ||
          (windowWidth >= 1124 && searchMovies.length < 12 ? "movie__button_hiden" : "") ||
          (windowWidth >= 768 && windowWidth < 1124 && searchMovies.length < 8 ? "movie__button_hiden" : "") ||
          (searchMovies.length <= visibleMovie ? "movie__button_hiden" : "")
        ) 
      }
    },[searchMovies, windowWidth, visibleMovie])

  return (
    <section className="movies">
      <Header>
        <div className="header__logo" aria-label="логотип страницы" />
        <Navigation />
      </Header>
      <main className="main">
        <Search
          type="text"
          name="movies"
          id="movies"
          value={values.movies || ''}
          onChange={handleChange}
          onSubmit={handleSubmit}
          handleCheckboxChange={handleCheckboxChange}
          notFoundValue={notFoundValue}
          isCheckbox={isCheckBox}
        />
        {isTitleActive ?
          <TitleH2
            title={isTitle}
            sectionClass="movies__title"
          /> :
        <>
          <MoviesCardList
            movies={searchMovies}
            buttonTrue="Сохранить"
            typeTrue="saved"
            typeFalse="save"
            isLoading={isLoading}
            handleClickSaveMovie={handleClickSaveMovie}
            handleCardDelete={handleCardDelete}
            savedMovies={savedMovies}
            savedMovieIds={savedMovieIds}
            visibleMovie={visibleMovie}
          />
          <button className={`movie__button link-opacity ${buttonHiden}`} onClick={showMoreMovie} type="button">Ещё</button>
        </>
        }
      </main>
      <Footer />
    </section>
  )
};

export default Movies;