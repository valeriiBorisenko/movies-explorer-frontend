import TitleH3MainPage from '../ui/TitleH3MainPage/TitleH3MainPage';
import ProjectTasks from './ProjectTasks/ProjectTasks';
import Timeline from './TimeLine/TimeLine'

function AboutProject({ isActive }) {
  return (
    <section className={`about-project ${isActive ? "about-project_hide" : ''}`} id="about-project">
      <div className="main-page__container">
        <TitleH3MainPage
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
      </div>
    </section >
  )
}

export default AboutProject;
