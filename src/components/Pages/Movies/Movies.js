import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import Search from '../../ui/MoviesContainer/Search/Search'
import MoviesCardList from '../../ui/MoviesContainer/MoviesCardList/MoviesCardList'
import TitleH2 from '../../ui/TitleH2/TitleH2'
import Footer from '../../Footer/Footer'
import moviesApi from '../../../utils/Api/moviesApi'
import moviesFilter from '../../../utils/moviesFilter'

function Movies() {

  const [isLoading, setIsLoading] = useState(false);
  const [isTitle, setIsTitle] = useState('')
  const [isTitleActive, setIsTitleActive] = useState(false)
  const [isError, setIsError] = useState(false)
  const [inputValues, setInputValues] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [moviesCard, setMoviesCard] = useState([])

  const onFormSubmit = (values) => {
    setInputValues({ ...inputValues, ...values });
  }

  useEffect(() => {
    if (inputValues !== null) {
      setIsTitleActive(false)
      setIsLoading(true)
      moviesApi
      .getMovies()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res))
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
      .finally(() => {
        const data = JSON.parse(localStorage.getItem('movies'))
        moviesFilter(inputValues, data, setMoviesCard, setIsTitleActive, setIsTitle, isError)
        setIsLoading()
      })
    }
  }, [inputValues, isError])


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
          register={register}
          required
          error={errors?.movies}
          onSubmit={handleSubmit(onFormSubmit)}
        />
        {isTitleActive ?
          <TitleH2
            title={isTitle}
            sectionClass="movies__title"
          /> :
          <MoviesCardList
            data={moviesCard}
            buttonTrue="Сохранить"
            typeTrue="saved"
            typeFalse="save"
            isLoading={isLoading}
          />
        }
      </main>
      <Footer />
    </section>
  )
};

export default Movies;