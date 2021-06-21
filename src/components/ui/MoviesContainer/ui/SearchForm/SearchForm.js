import Button from '../../../Button/Button'

function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-form__input" placeholder="Фильм" />
      <Button
        title="Поиск"
      />
    </form>
  )
}

export default SearchForm