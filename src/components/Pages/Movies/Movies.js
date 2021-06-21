import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import Search from '../../ui/MoviesContainer/Search/Search'
import MoviesCardList from '../../ui/MoviesContainer/MoviesCardList/MoviesCardList'
import Footer from '../../Footer/Footer'
import { movies } from '../../../utils/constants'

function Movies() {

  return (
    <section className="movies">
      <Header>
        <div className="header__logo" aria-label="логотип страницы" />
        <Navigation />
      </Header>
      <main className="main">
        <Search />
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