function Input({
  sectionClass,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  maxLength,
  minLength,
  pattern
}) {

  return (
    <input
      className={sectionClass}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      required
    />
  )
}

export default Input;
