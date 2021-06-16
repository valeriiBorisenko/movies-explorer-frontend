import TitleH3 from '../../../ui/TitleH3/TitleH3';
import Paragraph from '../../../ui/Paragraph/Paragraph'
import Timeline from '../../../ui/TimeLine/TimeLine'

function AboutProject() {
  return (
    <section className="about-project">
      <TitleH3
        title="О проекте"
        sectionClass="text-skin"
      />
      <div className="border" />
      <div className="about-project__container">
        <TitleH3
          title="Дипломный проект включал 5 этапов"
          sectionClass="about-project_title"
        />
        <Paragraph
          title="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
          sectionClass="text-skin"
        />
        <TitleH3
          title="На выполнение диплома ушло 5 недель"
          sectionClass="about-project_title"
        />
        <Paragraph
          title="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
          sectionClass="text-skin"
        />
      </div>
      <div className="about-project__timeline">
        <Timeline
          titleBox="1 неделя"
          titleText="Back-end"
          sectionClass="timeline_min"
        />
        <Timeline
          titleBox="4 недели"
          titleText="Front-end"
        />
      </div>
    </section >
  )
}

export default AboutProject;
