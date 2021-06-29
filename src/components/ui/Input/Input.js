function Input({
  sectionClass,
  type,
  name,
  required,
  register,
  placeholder,
  value,
}) {

  return (
    <input
      className={sectionClass}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      {...register(name, { required })}
    />
  )
}

export default Input;
