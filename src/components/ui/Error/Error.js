function Error({ error, sectionClass }) {
  return(
    <span className={`error ${sectionClass}`}>{error}</span>
  )
}

export default Error;
