import Error from "../../../ui/Error/Error";
import Input from "../../../ui/Input/Input"

function ProfileInput({
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

  const classNameInput = ['profile-input__input', error ? 'profile-input_error' : ''].join(' ').trim();

  return (
    <div className="profile-input">
      <label className="profile-input__text">{description}</label>
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
      <Error  
        error={error}
      />
    </div>
  )
}

export default ProfileInput;
