function TimeLine({ titleBox, titleText, sectionClass }) {
  return (
    <timeline>
      <p className={`timeline__box ${sectionClass}`}>{titleBox}</p>
      <p className="timeline__text">{titleText}</p>
    </timeline>
  )
}

export default TimeLine