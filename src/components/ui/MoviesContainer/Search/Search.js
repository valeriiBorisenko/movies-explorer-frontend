import SearchForm from "../ui/SearchForm/SearchForm";
import FilterCheckBox from '../ui/FilterCheckBox/FilterCheckBox'

function Search({ type, name, id, value, error, onChange, onSubmit, handleCheckboxChange }) {

  return (
    <section className="search">
      <SearchForm 
        type={type}
        name={name}
        id={id}
        error={error}
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
      />
      <div className="search__checkbox">
        <FilterCheckBox
          onChange={handleCheckboxChange} 
        />
        <p className="search__description">Короткометражки</p>
      </div>
      <div className="search__border" />
    </section>
  )
}

export default Search;
