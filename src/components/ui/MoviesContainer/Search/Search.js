import SearchForm from "../ui/SearchForm/SearchForm";
import FilterCheckBox from '../ui/FilterCheckBox/FilterCheckBox'

function Search({ 
  type, 
  name, 
  id, 
  value, 
  onChange, 
  onSubmit, 
  handleCheckboxChange,
  notFoundValue,
  isCheckbox
}) {

  return (
    <section className="search">
      <SearchForm 
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
        notFoundValue={notFoundValue}
      />
      <div className="search__checkbox">
        <FilterCheckBox
          onChange={handleCheckboxChange}
          isCheckbox={isCheckbox}
        />
        <p className="search__description">Короткометражки</p>
      </div>
      <div className="search__border" />
    </section>
  )
}

export default Search;
