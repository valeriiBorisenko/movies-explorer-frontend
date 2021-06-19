function AuthInput({
  description,
  type,
  name,
  register,
  required,
  errorMessage,
  error,
}) {
  const message = error ? errorMessage : '';

  const classNamesInput = ['auth-input__input', message ? 'auth-input_error' : ''].join(' ').trim();

  return (
    <div className="auth-input">
      <p className="auth-input__text">{description}</p>
      <input
        className={classNamesInput}
        type={type}
        name={name}
        {...register(name, { required })}
      />
      <span className="auth-input__text auth-input_error">{message}</span>
    </div>
  )
}

export default AuthInput;
