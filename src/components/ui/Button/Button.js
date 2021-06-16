function Button({ sectionClass, title, type }) {

  return(
    <button className={`button button_type_${sectionClass}`} type={type}>{title}</button>
  );
}

export default Button;
