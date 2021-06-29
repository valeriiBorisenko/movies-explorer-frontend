import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import Search from '../../ui/MoviesContainer/Search/Search'
import MoviesCardList from '../../ui/MoviesContainer/MoviesCardList/MoviesCardList'
import Footer from '../../Footer/Footer'
import { savedMovies } from '../../../utils/constants'

function SavedMovies() {

  const [inputValues, setInputValues] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (values) => {
    setInputValues({ ...inputValues, ...values });
  }

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
          register={register}
          required
          error={errors?.savedmovies}
          onSubmit={handleSubmit(onFormSubmit)}
        />
        <MoviesCardList
          data={savedMovies}
          typeFalse="delete"
          typeTrue="delete"
        />
      </main>
      <Footer />
    </section>
  )
};

export default SavedMovies;