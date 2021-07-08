import { titleMoviesCardList } from "./constants"

function moviesFilter( inputValue, checkBox, data, setSearchMovies, setIsTitleActive, setIsTitle, setIsLoading ) {
  setIsLoading(true)
  try {
    const foundMovies = data.filter((item) =>
      (inputValue? item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) : '') &&
      (checkBox ? item.duration < 40 : data)
    )

   if (foundMovies.length === 0 ) {
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
  } catch (err) {console.log(err)
  } finally { setIsLoading(false) }

} 

export default moviesFilter;
