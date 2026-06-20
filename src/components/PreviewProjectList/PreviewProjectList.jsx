import css from "./PreviewProjectList.module.css"
import PreviewProjectCard from "../PreviewProjectCard/PreviewProjectCard";

const PreviewProjectList = ({ projects }) => {
  return (
    <ul className={css.project__list}>
      {projects.map((project, index) => (
        <PreviewProjectCard key={project.id} project={project} index={index} />
      ))}
    </ul>
  );
};

export default PreviewProjectList;
