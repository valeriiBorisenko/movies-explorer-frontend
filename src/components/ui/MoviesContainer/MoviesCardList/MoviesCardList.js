import MoviesCard from '../ui/MoviesCard/MoviesCard'

function MoviesCardList({ data, buttonTrue, typeTrue, typeFalse }) {



  return (
    <section className="movie-card-list">
      <ul className="movie-card-list__container">
        {data.map((item) =>
          <MoviesCard
            name={item.name}
            url={item.url}
            duration={item.duration}
            key={item.id}
            buttonTrue={buttonTrue}
            typeTrue={typeTrue}
            typeFalse={typeFalse}
          />
        )}
      </ul>
    </section>
  )
}

export default MoviesCardList;
