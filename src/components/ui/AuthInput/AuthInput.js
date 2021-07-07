import Input from "../Input/Input";

function AuthInput({
  description,
  type,
  name,
  id,
  value,
  onChange,
  error,
  minLength,
  maxLength,
  pattern
}) {

  const classNameInput = ['auth-input__input', error ? 'auth-input_error' : ''].join(' ').trim();

  return (
    <div className="auth-input">
      <label className="auth-input__text">{description}</label>
      <Input
        sectionClass={classNameInput}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
      <span className="auth-input__text auth-input_error">{error}</span>
    </div>
  )
}

export default AuthInput;
