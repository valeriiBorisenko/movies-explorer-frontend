import TitleH3 from '../../ui/TitleH3/TitleH3';
import ParagraphMainPage from '../../ui/ParagraphMainPage/ParagraphMainPage'

function ProjectTasks({ title, text }) {
  return (
    <div className="project-tasks">
      <TitleH3
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
