import { titleMoviesCardList } from "./constants"

function moviesFilter(inputValues, data, setSearchMovies, setIsTitleActive, setIsTitle, isError, isCheckbox) {

  const foundMovies = data.filter((item) =>
    (inputValues? item.nameRU.toLowerCase().includes(inputValues.toLowerCase()) : '') &&
    (isCheckbox ? item.duration < 40 : data)
  )

  if (isError) {
    setIsTitleActive(true)
    setIsTitle(titleMoviesCardList.error)
  } else if (foundMovies.length === 0 && inputValues !== null) {
    setIsTitleActive(true)
    setIsTitle(titleMoviesCardList.notFound)
  } else {
    const sortMovies = foundMovies.sort((a, b) => {
      if (a.nameRU < b.nameRU) return -1;
      if (a.nameRU > b.nameRU) return 1;
      return 0;
    });
    localStorage.setItem('searchedMovies', JSON.stringify(sortMovies))
  
    const movies = JSON.parse(localStorage.getItem('searchedMovies'))
    setSearchMovies(movies)
    setIsTitleActive(false)
  }
} 

export default moviesFilter;
