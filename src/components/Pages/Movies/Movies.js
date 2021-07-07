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

function Movies( { movies, errorsApi }) {

  const [isTitle, setIsTitle] = useState(titleMoviesCardList.standart);
  const [isTitleActive, setIsTitleActive] = useState(true);

  const { values, handleChange, setValues } = useFormWithValidation();
  const [isCheckBox, setIsCheckBox] = useState(localStorage.checkBox);
  const [inputValue, setInputValue] = useState(JSON.parse(localStorage.getItem('searchValue')))
  const [notFoundValue, setNotFoundValue] = useState(false)
  
  const [searchMovies, setSearchMovies] = useState([])

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
    if ( movies.length !== 0 && inputValue !== null || isCheckBox ) {
      moviesFilter(inputValue, isCheckBox, movies, setSearchMovies, setIsTitleActive, setIsTitle, errorsApi)
    }
  }, [movies, isCheckBox, inputValue])

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
          <MoviesCardList
            data={searchMovies}
            buttonTrue="Сохранить"
            typeTrue="saved"
            typeFalse="save"
          />
        }
      </main>
      <Footer />
    </section>
  )
};

export default Movies;