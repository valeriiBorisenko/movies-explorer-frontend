function NavTab({ onClick }) {
  return (
    <section className="navtab">
      <button className="navtab__button link-opacity" type="button" onClick={onClick}>Узнать больше</button>
    </section>
  )
}

export default NavTab;
