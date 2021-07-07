import Button from '../../../Button/Button'
import Input from '../../../Input/Input'

function SearchForm({ 
  type, 
  name, 
  id, 
  value,
  onChange,
  onSubmit,
  notFoundValue
}) {

  const message = notFoundValue ? "Нужно ввести ключевое слово" : "Фильм"
  const errorClass = notFoundValue ? "search-form__input_error" : ""

  return (
    <form className="search-form" onSubmit={onSubmit} noValidate>
      <Input 
        sectionClass={`search-form__input ${errorClass}`}
        type={type}
        name={name}
        id={id}
        placeholder={message}
        value={value}
        onChange={onChange}
      />
      <Button
        title="Поиск"
        type="submit"
      />
    </form>
  )
}

export default SearchForm