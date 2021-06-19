function TimeLine({ titleBox, titleText, color }) {
  return (
    <timeline>
      <p className={`timeline__box timeline_color_${color}`}>{titleBox}</p>
      <p className="timeline__text">{titleText}</p>
    </timeline>
  )
}

export default TimeLine