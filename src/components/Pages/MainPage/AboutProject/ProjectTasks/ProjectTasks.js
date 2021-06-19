import TitleH3MainPage from '../../ui/TitleH3MainPage/TitleH3MainPage';
import ParagraphMainPage from '../../ui/ParagraphMainPage/ParagraphMainPage'

function ProjectTasks({ title, text }) {
  return (
    <div className="project-tasks">
      <TitleH3MainPage
        title={title}
        sectionClass="text-skin"
      />
      <ParagraphMainPage
        title={text}
        sectionClass="text-skin"
      />
    </div>
  )
}

export default ProjectTasks;
