function FilterCheckBox({ onChange }) {
  return (
    <label className="filter">
      <input 
        type="checkbox"
        onChange={onChange}
      />
      <span className="filter__slider" />
    </label>
  )
}

export default FilterCheckBox;
