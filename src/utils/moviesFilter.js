function moviesFilter(inputValues, data, setMoviesCard, setIsTitleActive, setIsTitle, isError) {
  const movies = data.filter((item) => item.nameRU.toLowerCase().includes(inputValues.movies.toLowerCase()))
  if (isError) {
    setIsTitleActive(true)
    setIsTitle('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
  } else if (movies.length === 0) {
    setIsTitleActive(true)
    setIsTitle('Ничего не найдено')
  } else {
    setMoviesCard(movies)
  }
} 

export default moviesFilter;