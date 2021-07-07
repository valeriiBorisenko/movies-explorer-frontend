function FilterCheckBox({ onChange, isCheckbox }) {
  return (
    <label className="filter">
      <input
        type="checkbox"
        name="swicth"
        id="swicth"
        onChange={onChange}
        defaultChecked={isCheckbox}
      />
      <span className="filter__slider" />
    </label>
  )
}

export default FilterCheckBox;
