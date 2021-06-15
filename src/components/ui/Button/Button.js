function Button({ sectionClass, title }) {

  return(
    <button className={`button button_type_${sectionClass}`} type="submit">{title}</button>
  );
}

export default Button;
