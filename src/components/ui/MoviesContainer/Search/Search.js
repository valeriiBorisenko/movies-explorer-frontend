import SearchForm from "../ui/SearchForm/SearchForm";
import FilterCheckBox from '../ui/FilterCheckBox/FilterCheckBox'

function Search() {
  return (
    <section className="search">
      <SearchForm />
      <div className="search__checkbox">
        <FilterCheckBox />
        <p className="search__description">Короткометражки</p>
      </div>
      <div className="search__border" />
    </section>
  )
}

export default Search;
