function Input({
  classNamesInput,
  type,
  name,
  required,
  register,
  placeholder,
  value,
  onChange,
}) {

  return (
    <input
      className={classNamesInput}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      {...register(name, { required })}
      onChange={onChange}
    />
  )
}

export default Input;
