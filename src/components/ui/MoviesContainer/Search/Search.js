import SearchForm from "../ui/SearchForm/SearchForm";
import FilterCheckBox from '../ui/FilterCheckBox/FilterCheckBox'

function Search({ type, name, register, required, error, errorMessage, onSubmit }) {
  return (
    <section className="search">
      <SearchForm 
        type={type}
        name={name}
        register={register}
        required={required}
        error={error}
        errorMessage={errorMessage}
        onSubmit={onSubmit}
      />
      <div className="search__checkbox">
        <FilterCheckBox />
        <p className="search__description">Короткометражки</p>
      </div>
      <div className="search__border" />
    </section>
  )
}

export default Search;
