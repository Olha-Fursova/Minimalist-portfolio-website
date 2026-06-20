import clsx from "clsx";

import css from "./ProjectMainDetails.module.css";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ProjectMainDetails = ({ project }) => {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <div
      className={clsx(
        css.content__container,
        isVisible ? "sectionVisible" : "sectionHiddenReverse",
      )}
      ref={ref}
    >
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
