import Button from '../../../Button/Button'
import Input from '../../../Input/Input'

function SearchForm({ type, name, register, required, error, errorMessage, onSubmit }) {

  const message = error ? errorMessage : 'Фильм';

  return (
    <form className="search-form" onSubmit={onSubmit} noValidate>
      <Input 
        sectionClass="search-form__input"
        type={type}
        name={name}
        register={register}
        required={required}
        placeholder={message}
      />
      <Button
        title="Поиск"
        type="submit"
      />
    </form>
  )
}

export default SearchForm