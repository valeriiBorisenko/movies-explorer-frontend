import TitleH3 from '../../../ui/TitleH3/TitleH3';
import ProjectTasks from '../../../ui/ProjectTasks/ProjectTasks';
import Timeline from '../../../ui/TimeLine/TimeLine'

function AboutProject() {
  return (
    <section className="main-page__container">
      <TitleH3
        title="О проекте"
        sectionClass="text-skin"
      />
      <div className="border" />
      <div className="about-project__container">
        <ProjectTasks 
          title="Дипломный проект включал 5 этапов"
          text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
        />
        <ProjectTasks
          title="На выполнение диплома ушло 5 недель"
          text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
        />
      </div>
      <div className="about-project__timeline">
        <Timeline
          titleBox="1 неделя"
          titleText="Back-end"
          color="blue"
        />
        <Timeline
          titleBox="4 недели"
          titleText="Front-end"
          color="grey"
        />
      </div>
    </section >
  )
}

export default AboutProject;
