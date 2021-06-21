import Input from "../../../ui/Input/Input"

function ProfileInput({
  description,
  type,
  name,
  register,
  required,
  errorMessage,
  error,
  value
}) {
  const message = error ? errorMessage : '';

  const classNamesInput = ['profile-input__input', message ? 'profile-input_error' : ''].join(' ').trim();

  return (
    <div className="profile-input">
      <label className="profile-input__text">{description}</label>
      <Input
        classNamesInput={classNamesInput}
        type={type}
        name={name}
        register={register}
        required={required}
        placeholder={message}
        value={value}
      />
    </div>
  )
}

export default ProfileInput;
