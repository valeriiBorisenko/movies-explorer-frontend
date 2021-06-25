import { useForm } from 'react-hook-form'
import { useState } from 'react'

import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import Search from '../../ui/MoviesContainer/Search/Search'
import MoviesCardList from '../../ui/MoviesContainer/MoviesCardList/MoviesCardList'
import Footer from '../../Footer/Footer'
import { movies } from '../../../utils/constants'

function Movies() {

  const [inputValues, setInputValues] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (values) => {
    setInputValues({ ...inputValues, ...values });
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
          register={register}
          required
          error={errors?.movies}
          errorMessage="Нужно ввести ключевое слово"
          onSubmit={handleSubmit(onFormSubmit)}
        />
        <MoviesCardList
          data={movies}
          buttonTrue="Сохранить"
          typeTrue="saved"
          typeFalse="save"
        />
      </main>
      <Footer />
    </section>
  )
};

export default Movies;