import Button from '../../../Button/Button'
import Input from '../../../Input/Input'

function SearchForm({ type, name, register, required, error, onSubmit }) {

  const message = error ? "Нужно ввести ключевое слово" : "Фильм";
  const errorClass = error ? "search-form__input_error" : ""

  return (
    <form className="search-form" onSubmit={onSubmit} noValidate>
      <Input 
        sectionClass={`search-form__input ${errorClass} `}
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