import Input from "../Input/Input";

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

  const classNameInput = ['auth-input__input', message ? 'auth-input_error' : ''].join(' ').trim();

  return (
    <div className="auth-input">
      <label className="auth-input__text">{description}</label>
      <Input
        sectionClass={classNameInput}
        type={type}
        name={name}
        register={register}
        required={required}
      />
      <span className="auth-input__text auth-input_error">{message}</span>
    </div>
  )
}

export default AuthInput;
