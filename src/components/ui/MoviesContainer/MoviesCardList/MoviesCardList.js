import MoviesCard from '../ui/MoviesCard/MoviesCard'
import Preloader from '../../../ui/Preloader/Preloader'

function MoviesCardList({ 
  movies,
  savedMovies,
  buttonTrue, 
  typeTrue, 
  typeFalse, 
  isLoading, 
  handleClickSaveMovie,
  handleCardDelete,
  savedMovieIds,
  isSavedMoviesPage,
  visibleMovie
}) {

    function renderContainer() {
      if (movies !== undefined) {
        return (
          movies.slice(0, visibleMovie).map((item) =>
            <li className="movies-card" key={item.id === undefined ? item._id : item.id}>
              <MoviesCard
              {...item}
              country={item.country}
              director={item.director}
              duration={item.duration}
              year={item.year}
              description= {item.description}
              nameRU={item.nameRU}
              nameEN={item.nameEN}
              image={item.image}
              buttonTrue={buttonTrue}
              typeTrue={typeTrue}
              typeFalse={typeFalse}
              handleClickSaveMovie={handleClickSaveMovie}
              handleCardDelete={handleCardDelete}
              savedMovies={savedMovies}
              savedMovieIds={savedMovieIds}
              isSavedMoviesPage={isSavedMoviesPage}
              />
            </li>
          )
        )
      }
    }

  return isLoading && movies ?
    (<Preloader />) :
    (<section className="movie-card-list">
      <ul className="movie-card-list__container">
        { renderContainer() }
      </ul>
    </section>)
}

export default MoviesCardList;
