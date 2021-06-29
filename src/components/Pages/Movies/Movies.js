import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import Search from '../../ui/MoviesContainer/Search/Search'
import MoviesCardList from '../../ui/MoviesContainer/MoviesCardList/MoviesCardList'
import Footer from '../../Footer/Footer'
import moviesApi from '../../../utils/Api/moviesApi'

function Movies() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const [inputValues, setInputValues] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [moviesCard, setMoviesCard] = useState([])

  const onFormSubmit = (values) => {
    setInputValues({ ...inputValues, ...values });
  }

  useEffect(() => {
    if (inputValues !== null) {
      setIsLoading(true)
      moviesApi
        .getMovies()
        .then((res) => {
          setMoviesCard(res)
        })
        .catch((err) => {
          console.log(err)
          setIsError(true)
        })
        .finally(() => setIsLoading(false))
    }
  }, [inputValues])

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
        <MoviesCardList
          data={moviesCard}
          buttonTrue="Сохранить"
          typeTrue="saved"
          typeFalse="save"
          isLoading={isLoading}
          isError={isError}
        />
      </main>
      <Footer />
    </section>
  )
};

export default Movies;