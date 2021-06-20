function Input({
  classNamesInput,
  type,
  name,
  required,
  register,
  placeholder,
  value,
}) {

  return (
    <input
      className={classNamesInput}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      {...register(name, { required })}
    />
  )
}

export default Input;
