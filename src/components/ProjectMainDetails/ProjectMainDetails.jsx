import css from "./ProjectMainDetails.module.css";

const ProjectMainDetails = ({ project }) => {
  return (
    <div className={css.content__container}>
      <div className="decorative__line"></div>

      <div className={css.content__card}>
        <h1 className="section__title">{project.name}</h1>
        <p className={css.project__description}>{project.description}</p>

        <div className={css.extras__box}>
          <p className={css.extras__text}>{project.category__name}</p>
          <p className={css.extras__text}>{project.tech__stack}</p>
        </div>

        <a className="btn btn__secondary" href="">
          Visit Website
        </a>
      </div>

      <div className="decorative__line"></div>
    </div>
  );
};

export default ProjectMainDetails;
