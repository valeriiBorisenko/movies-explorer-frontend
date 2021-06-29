function TimeLine({ titleBox, titleText, color }) {
  return (
    <section>
      <p className={`timeline__box timeline_color_${color}`}>{titleBox}</p>
      <p className="timeline__text">{titleText}</p>
    </section>
  )
}

export default TimeLine