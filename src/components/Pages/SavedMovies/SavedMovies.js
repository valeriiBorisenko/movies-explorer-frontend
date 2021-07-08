import useFormWithValidation from '../../../hooks/useFormWithValidation'
import { useEffect, useState } from 'react'

import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import Search from '../../ui/MoviesContainer/Search/Search'
import MoviesCardList from '../../ui/MoviesContainer/MoviesCardList/MoviesCardList'
import Footer from '../../Footer/Footer'

import moviesFilter from '../../../utils/moviesFilter'
import TitleH2 from '../../ui/TitleH2/TitleH2'

function SavedMovies({ movies, handleCardDelete }) {

  const [isLoading, setIsLoading] = useState(false)

  const { values, handleChange } = useFormWithValidation();
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [inputValue, setInputValue] = useState(values.savedmovies || '')
  const [notFoundValue, setNotFoundValue] = useState(false)
  const [searchMovies, setSearchMovies] = useState([])
  const [isTitleActive, setIsTitleActive] = useState(false);
  const [isTitle, setIsTitle] = useState('');

  function handleCheckboxChange() {
    setIsCheckBox(!isCheckBox)
  };
  
  function handleSubmit(evt) {
    evt.preventDefault();
    if (values.savedmovies) {
      setInputValue(values.savedmovies)
    } else {
    setNotFoundValue(true)
    }
  }
  
  useEffect (() => {
    if ( movies.length !== 0 && inputValue !== null ) {
      setIsLoading(true)
      moviesFilter(inputValue, isCheckBox, movies, setSearchMovies, setIsTitleActive, setIsTitle, setIsLoading )
    } return
  }, [movies, isCheckBox, inputValue])
  
  return (
    <section className="saved-movies">
      <Header>
        <div className="header__logo" aria-label="логотип страницы" />
        <Navigation />
      </Header>
      <main className="main">
        <Search 
          type="text"
          name="savedmovies"
          value={values.savedmovies || ''}
          onChange={handleChange}
          onSubmit={handleSubmit}
          handleCheckboxChange={handleCheckboxChange}
          notFoundValue={notFoundValue}
          isCheckbox={isCheckBox}
        />
        {movies.length === 0 && inputValue === undefined && isTitleActive?
          <TitleH2
            title={isTitle}
            sectionClass="movies__title"
          /> :
          <MoviesCardList
            movies={searchMovies.length > 0? searchMovies : movies}
            typeFalse="delete"
            typeTrue="delete"
            isSavedMoviesPage
            isLoading={isLoading}
            handleCardDelete={handleCardDelete}
          />
        }
      </main>
      <Footer />
    </section>
  )
};

export default SavedMovies;