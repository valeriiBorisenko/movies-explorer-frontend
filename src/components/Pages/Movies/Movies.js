import { useState } from 'react'

import useFormWithValidation from '../../../hooks/useFormWithValidation'
import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import Search from '../../ui/MoviesContainer/Search/Search'
import MoviesCardList from '../../ui/MoviesContainer/MoviesCardList/MoviesCardList'
import TitleH2 from '../../ui/TitleH2/TitleH2'
import Footer from '../../Footer/Footer'
import moviesFilter from '../../../utils/moviesFilter'
import { titleMoviesCardList } from '../../../utils/constants'

function Movies({moviesCard, isErrorMovies}) {

  const [isTitle, setIsTitle] = useState(titleMoviesCardList.standart);
  const [isTitleActive, setIsTitleActive] = useState(true);

  const [errorSearh, setErrorSearch] = useState(false)

  const { values, handleChange } = useFormWithValidation();
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [inputValues, setInputValues] = useState(null)
  
  const [searchMovies, setSearchMovies] = useState([])

  function handleCheckboxChange(){
    setIsCheckBox(!isCheckBox);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    setInputValues(values.movies)
    moviesFilter(inputValues, moviesCard, setSearchMovies, setIsTitleActive, setIsTitle, isErrorMovies, isCheckBox)
  }

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
          error={errorSearh}
          onChange={handleChange}
          onSubmit={handleSubmit}
          handleCheckboxChange={handleCheckboxChange}
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