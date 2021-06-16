function Header( {sectionClass, children} ) {
   
  return (
    <header className={`header ${sectionClass}`}>
      {children}
    </header>
  )
}

export default Header;